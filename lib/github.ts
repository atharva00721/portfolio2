export async function getContributionData(username: string) {
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

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { username } }),
    next: { revalidate: 3600 }, // 1 hour cache
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch GitHub data: ${res.statusText}`);
  }

  const json = await res.json();
  
  if (json.errors) {
    throw new Error(`GitHub GraphQL Error: ${json.errors[0].message}`);
  }

  return json.data.user.contributionsCollection.contributionCalendar;
}
