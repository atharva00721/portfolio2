import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit after 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-between bg-neutral-950 px-4 pb-4 text-neutral-200 font-mono text-sm md:px-8 md:pb-8">
      <div className="flex flex-col gap-1">
        <span>ATHARVA RAJ SINGH THAKUR</span>
        <span className="opacity-50">PORTFOLIO &copy; 2025</span>
      </div>
      <div className="text-4xl md:text-8xl font-light">
        {Math.min(progress, 100)}%
      </div>
    </div>
  );
};

export default Loader;