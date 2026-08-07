"use client";

import React, { useEffect, useState } from "react";
import GitHubActivity, { type Contribution } from "./GitHubActivity";

type GitHubPayload = {
  total: number;
  contributions: Contribution[];
};

const GitHubGraph: React.FC = () => {
  const [data, setData] = useState<GitHubPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((payload: GitHubPayload) => {
        if (payload?.contributions?.length) {
          setData(payload);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-32 w-full animate-pulse rounded-sm bg-neutral-100 dark:bg-neutral-900" />
    );
  }

  if (error || !data) {
    return (
      <div className="text-sm text-neutral-500">Failed to load GitHub data.</div>
    );
  }

  return (
    <GitHubActivity
      contributions={data.contributions}
      total={data.total}
      showMonths
    />
  );
};

export default GitHubGraph;
