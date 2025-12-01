import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PlaygroundItem } from '../../types';

interface ExperimentDetailProps {
  experiment: PlaygroundItem;
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleBack: () => void;
}

const ExperimentDetail: React.FC<ExperimentDetailProps> = ({
  experiment,
  borderClass,
  mutedText,
  isDark,
  handleBack
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="grow flex flex-col"
    >
      {/* Header / Nav */}
      <div className={`p-6 md:p-8 border-b ${borderClass} flex justify-between items-center sticky top-0 bg-inherit z-10 backdrop-blur-md`}>
        <button 
            onClick={handleBack}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:underline decoration-wavy underline-offset-4"
        >
            <ArrowLeft size={14} />
            Back to Lab
        </button>
        <span className={`font-mono text-xs uppercase tracking-widest ${mutedText}`}>
            Exp. No. {experiment.id}
        </span>
      </div>

      {/* Hero Section */}
      <div className={`w-full aspect-video md:aspect-21/9 overflow-hidden border-b ${borderClass} bg-black`}>
        {experiment.videoUrl ? (
            <video 
                src={experiment.videoUrl} 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                controls
            />
        ) : (
            <img 
                src={experiment.imageUrl} 
                alt={experiment.title}
                className="w-full h-full object-cover"
            />
        )}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 grow">
          
          {/* Main Text Column */}
          <div className={`lg:col-span-12 p-6 md:p-12 border-b lg:border-b-0 ${borderClass}`}>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-none">
                  {experiment.title}
              </h1>
              
              <div className="prose dark:prose-invert max-w-none">
                  <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                      {experiment.longDescription || experiment.description}
                  </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                  {experiment.techStack.map((tech) => (
                      <span key={tech} className={`text-xs font-mono uppercase border ${borderClass} px-3 py-1`}>
                          {tech}
                      </span>
                  ))}
              </div>

              <a 
                  href={experiment.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-12 inline-flex items-center gap-2 px-6 py-3 border ${borderClass} font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors`}
              >
                  Launch Experiment <ArrowUpRight size={18} />
              </a>
          </div>
      </div>
    </motion.div>
  );
};

export default ExperimentDetail;
