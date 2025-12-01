import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

interface ProjectsProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleProjectClick: (project: Project) => void;
  handleNav: (view: 'home') => void;
}

const Projects: React.FC<ProjectsProps> = ({
  borderClass,
  mutedText,
  isDark,
  handleProjectClick,
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
                Selected<br/>
                Works
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${mutedText} max-w-prose`}>
                A collection of projects that I&apos;ve worked on.
            </p>
        </div>

        {/* Projects Grid */}
        <div className="grow grid grid-cols-1 md:grid-cols-2">
            {PROJECTS.map((project, idx) => (
                 <motion.div 
                    key={project.slug} 
                    onClick={() => handleProjectClick(project)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group p-6 md:p-8 border-b ${borderClass} ${idx % 2 === 0 ? `md:border-r ${borderClass}` : ''} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 flex flex-col cursor-pointer`}
                >
                     <div className="flex justify-between items-start mb-6">
                         <h4 className="text-3xl font-serif">{project.title}</h4>
                         <span className="opacity-50 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
                             <ArrowUpRight className="w-5 h-5" />
                         </span>
                     </div>
                     <p className={`${mutedText} text-sm mb-8 grow`}>{project.description}</p>
                     <div className="flex flex-wrap gap-2 mt-auto">
                         {project.techStack.slice(0, 4).map((t) => (
              <span key={t} className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
                {t}
              </span>
            ))}
                     </div>
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

export default Projects;