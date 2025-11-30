import React, { useEffect, useState } from 'react';
import ContributionGraph, { ContributionCalendar } from './ContributionGraph';

const GitHubGraph: React.FC = () => {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => {
        setCalendar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load GitHub data", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="animate-pulse h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg w-full"></div>;
  }

  if (!calendar) {
    return <div className="text-sm text-neutral-500">Failed to load GitHub data.</div>;
  }

  return (
    <div className="w-full overflow-x-auto pb-2">
      <ContributionGraph calendar={calendar} />
    </div>
  );
};

export default GitHubGraph;