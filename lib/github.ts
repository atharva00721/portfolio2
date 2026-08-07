export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type Contribution = {
  date: string;
  count: number;
  level: ContributionLevel;
};

function levelFromCount(count: number): ContributionLevel {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 7) return 2;
  if (count < 12) return 3;
  return 4;
}

type CalendarWeek = {
  contributionDays: { date: string; contributionCount: number }[];
};

type Calendar = {
  totalContributions: number;
  weeks: CalendarWeek[];
};

async function githubGraphQL<T>(
  query: string,
  variables: Record<string, string>,
): Promise<T> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch GitHub data: ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`GitHub GraphQL Error: ${json.errors[0].message}`);
  }

  return json.data as T;
}

export async function getContributionData(username: string): Promise<Calendar> {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const data = await githubGraphQL<{
    user: { contributionsCollection: { contributionCalendar: Calendar } };
  }>(query, { username });

  return data.user.contributionsCollection.contributionCalendar;
}

export function toContributions(calendar: Calendar): Contribution[] {
  const days = calendar.weeks.flatMap((week) => week.contributionDays);

  const start = days.findIndex(
    (day) => new Date(`${day.date}T00:00:00Z`).getUTCDay() === 0,
  );

  return days.slice(start < 0 ? 0 : start).map((day) => ({
    date: day.date,
    count: day.contributionCount,
    level: levelFromCount(day.contributionCount),
  }));
}

export async function getGitHubActivity(username: string) {
  const calendar = await getContributionData(username);

  return {
    total: calendar.totalContributions,
    contributions: toContributions(calendar),
  };
}
