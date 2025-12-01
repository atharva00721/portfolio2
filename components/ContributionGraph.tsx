"use client";

import { motion } from "framer-motion";

export interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface ContributionGraphProps {
  calendar: ContributionCalendar;
}

export default function ContributionGraph({ calendar }: ContributionGraphProps) {

  const getIntensity = (count: number) => {
    if (count === 0) return 0;
    if (count < 3) return 1;
    if (count < 7) return 2;
    return 3;
  };

  const getColor = (level: number) => {
    switch (level) {
      case 3: return 'bg-purple-500';
      case 2: return 'bg-purple-500/70';
      case 1: return 'bg-purple-500/30';
      default: return 'bg-purple-500/20';
    }
  };

  return (
    <div className="w-full ">
      <div className="flex gap-1 justify-end min-w-max">
        {calendar.weeks.slice(-32).map((week, wIndex) => (
          <div key={wIndex} className={`flex flex-col gap-1 ${wIndex < 7 ? 'hidden md:flex' : ''}`}>
            {week.contributionDays.map((day) => (
              <motion.div
                key={day.date}
                className={`h-2.5 w-2.5 md:h-2.5 md:w-2.5 rounded-sm ${getColor(getIntensity(day.contributionCount))}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: wIndex * 0.02 }}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-end gap-2 text-xs text-neutral-500">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-sm bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-sm bg-purple-500/30" />
          <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-sm bg-purple-500/70" />
          <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-sm bg-purple-500" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
