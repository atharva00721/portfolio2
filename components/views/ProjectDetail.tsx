import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Clock, Github, GitCommit, Monitor, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { Project } from '../../types';
import { CurrentMedia, isVideo } from './CurrentMedia';

interface ProjectDetailProps {
  project: Project;
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleNav: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  borderClass,
  mutedText,
  isDark,
  handleNav
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Combine main image and screenshots into a single media array
  const mediaItems = React.useMemo(() => {
    const items = [];
    if (project.imageUrl) {
      items.push({ type: 'main', url: project.imageUrl, alt: project.title });
    }
    if (project.screenshots) {
      project.screenshots.forEach(s => {
        items.push({ ...s, type: 'screenshot' });
      });
    }
    return items as { type: 'main' | 'screenshot'; url: string; alt: string }[];
  }, [project]);

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, [mediaItems.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (showModal) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowModal(false);
    }
  }, [showModal, nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);



  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="grow flex flex-col"
      >
        {/* Sticky Back Navigation */}
        <div className={`flex justify-between items-center p-4 border-b ${borderClass} bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-30`}>
            <button 
                onClick={handleNav}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-purple-500 transition-colors"
            >
                <ChevronLeft size={14} /> Back to Projects
            </button>
        </div>

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

            {/* Carousel / Hero Image */}
            <div className={`p-8 border-b ${borderClass} bg-neutral-100/5 dark:bg-neutral-900/5`}>
              <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 group">
                {mediaItems.length > 0 ? (
                  <>
                    <div 
                      className="w-full h-full cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      <CurrentMedia item={mediaItems[currentSlide]} className="object-cover" autoPlay={true} showModal={false} />
                      
                      {/* Video Indicator Overlay */}
                      {isVideo(mediaItems[currentSlide].url) && !showModal && (
                         <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                         </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    {mediaItems.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black border border-neutral-200 dark:border-neutral-800"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black border border-neutral-200 dark:border-neutral-800"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {mediaItems.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentSlide(idx);
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                currentSlide === idx 
                                  ? 'bg-white w-4' 
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
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
                          <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-1 flex items-center gap-1"><GitCommit size={10} /> Commits</div>
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

      {/* Full Screen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowModal(false)}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div 
                className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                onClick={e => e.stopPropagation()}
            >
                {mediaItems.length > 0 && (
                    <CurrentMedia item={mediaItems[currentSlide]} className="object-contain" autoPlay={true} showModal={true} />
                )}

                {/* Modal Navigation */}
                {mediaItems.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={48} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <ChevronRight size={48} />
                        </button>
                    </>
                )}
                
                {/* Modal Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm">
                    {currentSlide + 1} / {mediaItems.length}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;