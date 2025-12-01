import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

interface FeaturedProjectsProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleProjectClick: (project: Project) => void;
  handleNav: (view: 'projects') => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  borderClass,
  mutedText,
  isDark,
  handleProjectClick,
  handleNav
}) => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 2);

  return (
    <div className="grid grid-cols-1">
      <div className={`p-6 border-b ${borderClass}`}>
        <h3 className="font-serif italic text-2xl mb-4">Featured Works</h3>
      </div>
      {featuredProjects.map((project) => (
        <div 
          key={project.slug} 
          onClick={() => handleProjectClick(project)}
          className={`group p-6 md:p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer`}
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-3xl font-serif group-hover:text-purple-500 transition-colors">{project.title}</h4>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
          <p className={`${mutedText} text-sm mb-6`}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((t) => (
              <span key={t} className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
                {t}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      ))}
      {/* View All Projects Card */}
      <button 
        onClick={() => handleNav('projects')}
        className={`w-full group p-6 md:p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 flex items-center justify-between text-left`}
      >
        <div>
          <h4 className="text-xl font-serif italic mb-1">View All Projects</h4>
          <p className={`text-sm ${mutedText}`}>Explore the full archive</p>
        </div>
        <div className="p-3 rounded-full transition-opacity">
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  );
};

export default FeaturedProjects;
