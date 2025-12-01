import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../constants';

interface ExperienceProps {
  borderClass: string;
  mutedText: string;
  handleNav: (view: 'home') => void;
}

const Experience: React.FC<ExperienceProps> = ({
  borderClass,
  mutedText,
  handleNav
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="grow"
    >
        <div className={`p-6 md:p-8 md:py-14 border-b ${borderClass}`}>
            <h2 className="font-serif text-3xl md:text-5xl mb-1 leading-tight uppercase">
                Work<br/>
                History
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${mutedText} max-w-prose`}>
                My professional journey and contributions.
            </p>
        </div>

        {/* Experience Grid */}
        <div className="grow grid grid-cols-1">
            {EXPERIENCE.map((exp, idx) => (
                 <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group p-6 md:p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 flex flex-col`}
                >
                     <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                         <div>
                             <h4 className="text-3xl font-serif mb-1">{exp.company}</h4>
                             <p className={`text-sm font-mono uppercase tracking-wider ${mutedText}`}>{exp.role}</p>
                         </div>
                         <div className={`text-right ${mutedText} text-sm font-mono`}>
                             <p>{exp.date}</p>
                             <p>{exp.location}</p>
                         </div>
                     </div>
                     
                     <ul className="space-y-2 max-w-prose">
                        {exp.description.map((desc, i) => (
                            <li key={i} className={`${mutedText} text-sm flex gap-3`}>
                                <span className="text-purple-500 mt-1.5">•</span>
                                <span>{desc}</span>
                            </li>
                        ))}
                     </ul>
                 </motion.div>
             ))}
        </div>
        
        <div className={`p-6 md:p-12 text-center`}>
            <button 
                onClick={() => handleNav('home')}
                className={`text-sm font-bold uppercase tracking-wider border-b border-transparent hover:border-current transition-colors`}
            >
                Back to Home
            </button>
        </div>
    </motion.div>
  );
};

export default Experience;
