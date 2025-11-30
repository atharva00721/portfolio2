import React from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { Clock, Github, GitCommit, Monitor } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailProps {
  project: Project;
  borderClass: string;
  mutedText: string;
  isDark: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  borderClass,
  mutedText,
  isDark
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="grow flex flex-col"
    >
        {/* Project Header */}
        <div className={`p-8 md:p-12 border-b ${borderClass} flex flex-col md:flex-row justify-between md:items-center gap-6`}>
            <div>
                <h1 className="font-serif text-4xl md:text-6xl">{project.title}</h1>
                <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border ${isDark ? 'border-neutral-700' : 'border-neutral-300'}`}>
                    {project.category}
                </span>
                {project.featured && (
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-purple-500/10 text-purple-500 border border-purple-500/20`}>
                        Featured
                    </span>
                )}
                </div>
            </div>
            <div className="flex gap-4">
            {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 text-sm font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity flex items-center gap-2`}>
                    <Monitor size={16} /> Live Demo
                </a>
            )}
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 text-sm font-bold uppercase tracking-wider border ${isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-300 hover:bg-neutral-200'} transition-colors flex items-center gap-2`}>
                <Github size={16} /> Code
            </a>
            </div>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
            {/* Left Content */}
            <div className={`lg:col-span-8 border-b lg:border-b-0 lg:border-r ${borderClass}`}>
                
                {/* Screenshots / Hero Image */}
                <div className={`p-8 border-b ${borderClass} bg-neutral-100/5 dark:bg-neutral-900/5`}>
                    <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400">
                        {project.imageUrl ? (
                            <NextImage 
                                src={project.imageUrl} 
                                alt={project.title} 
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <span>No Preview Available</span>
                        )}
                    </div>
                </div>

                {/* Long Description & Features */}
                <div className={`p-8 md:p-12 border-b ${borderClass}`}>
                    <h3 className="font-serif italic text-2xl mb-6">About the Project</h3>
                    <p className={`text-lg leading-relaxed ${mutedText} mb-8 max-w-prose`}>
                        {project.longDescription || project.description}
                    </p>

                    {project.features && (
                        <div className="mt-8">
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className={`flex gap-3 text-sm ${mutedText}`}>
                                        <span className="text-purple-500 mt-1">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Challenges & Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {project.highlights && (
                        <div className={`p-8 border-b md:border-b-0 md:border-r ${borderClass}`}>
                            <h3 className="font-serif italic text-xl mb-6">Highlights</h3>
                            <ul className="space-y-3">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className={`text-sm ${mutedText} leading-relaxed flex items-start`}>
                                        <span className="mr-3 font-mono text-xs opacity-50 mt-1 shrink-0">0{i + 1}</span>
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {project.challenges && (
                        <div className={`p-8`}>
                            <h3 className="font-serif italic text-xl mb-6">Challenges</h3>
                            <ul className="space-y-3">
                                {project.challenges.map((c, i) => (
                                    <li key={i} className={`text-sm ${mutedText} leading-relaxed flex items-start`}>
                                        <span className="mr-3 font-mono text-xs opacity-50 mt-1 shrink-0">0{i + 1}</span>
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
                {/* Tech Stack */}
                <div className={`p-8 border-b ${borderClass}`}>
                    <h3 className="font-serif italic text-xl mb-6">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(t => (
                            <span key={t} className={`text-xs font-mono px-3 py-1.5 border ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                {project.metrics && (
                    <div className={`p-8 border-b ${borderClass}`}>
                        <h3 className="font-serif italic text-xl mb-6">Metrics</h3>
                        <div className="space-y-6">
                            {project.metrics.performance?.loadTime && (
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-60 mb-1">
                                        <Clock size={12} /> Performance
                                    </div>
                                    <p className="text-sm font-medium">{project.metrics.performance.loadTime}</p>
                                </div>
                            )}
                            
                            {project.metrics.development && (
                                <div className="grid grid-cols-2 gap-4">
                                    {project.metrics.development.timeToComplete && (
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-1">Timeline</div>
                                            <p className="text-lg font-bold">{project.metrics.development.timeToComplete}</p>
                                        </div>
                                    )}
                                    {project.metrics.development.commitCount && (
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-1 flex items-center gap-1"><GitCommit size={10}/> Commits</div>
                                            <p className="text-lg font-bold">{project.metrics.development.commitCount}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Future Goals */}
                {project.futureGoals && (
                    <div className={`p-8`}>
                        <h3 className="font-serif italic text-xl mb-6">Future Goals</h3>
                        <ul className="space-y-2">
                            {project.futureGoals.slice(0, 4).map((goal, i) => (
                                <li key={i} className={`text-sm ${mutedText} border-b border-dashed border-neutral-700/30 pb-2`}>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </main>
    </motion.div>
  );
};

export default ProjectDetail;