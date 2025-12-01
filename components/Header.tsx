import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface HeaderProps {
  view: 'home' | 'projects' | 'project-detail' | 'blog' | 'blog-detail' | 'experience' | 'experiments';
  handleNav: (target: 'home' | 'projects' | 'blog' | 'experience' | 'experiments') => void;
  borderClass: string;
  mutedText: string;
}

const Header: React.FC<HeaderProps> = ({ 
  view, 
  handleNav, 
  borderClass, 
  mutedText 
}) => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className={`border-b ${borderClass} relative z-40 bg-inherit`}>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        
        {/* Cell 1: Pages Menu / Home Link */}
        <div className={`col-span-1 relative text-xs font-mono uppercase tracking-widest ${mutedText} border-b border-r lg:border-b-0 ${borderClass} group transition-colors`}>
            {view === 'home' ? (
               <>
                   <button 
                       className="w-full h-full p-4 md:p-6 flex items-center justify-between cursor-pointer hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50" 
                       onClick={() => setMenuOpen(!menuOpen)}
                   >
                       <span>PAGES</span>
                       <ChevronDown size={12} className={`transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   <AnimatePresence>
                       {menuOpen && (
                           <motion.div 
                               initial={{ opacity: 0, y: -10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -10 }}
                               className={`absolute top-full left-0 w-[200%] md:w-full z-50 border-x border-b ${borderClass} bg-background`}
                           >
                               <button 
                                   onClick={(e) => { e.stopPropagation(); handleNav('blog'); setMenuOpen(false); }}
                                   className={`w-full text-left p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 border-b ${borderClass}`}
                               >
                                   INDEX
                               </button>
                               <button 
                                   onClick={(e) => { e.stopPropagation(); handleNav('projects'); setMenuOpen(false); }}
                                   className={`w-full text-left p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 border-b ${borderClass}`}
                               >
                                   PROJECTS
                               </button>
                               <button 
                                   onClick={(e) => { e.stopPropagation(); handleNav('experience'); setMenuOpen(false); }}
                                   className={`w-full text-left p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 border-b ${borderClass}`}
                               >
                                   EXPERIENCE
                               </button>
                               <button 
                                   onClick={(e) => { e.stopPropagation(); handleNav('experiments'); setMenuOpen(false); }}
                                   className={`w-full text-left p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900`}
                               >
                                   EXPERIMENTS
                               </button>
                           </motion.div>
                       )}
                   </AnimatePresence>
               </>
            ) : (
                <button 
                    onClick={() => handleNav('home')}
                    className="w-full h-full p-4 md:p-6 flex items-center justify-between text-neutral-900 dark:text-neutral-100 font-bold hover:text-purple-500 transition-colors cursor-pointer"
                >
                     <span>ATHARVA RAJ</span>
                     <ArrowLeft size={12} />
                </button>
            )}
        </div>

        {/* Cell 2: Mode - Interactive Toggle */}
        <button 
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={`col-span-1 w-full p-4 md:p-6 text-xs font-mono uppercase tracking-widest ${mutedText} border-b lg:border-b-0 lg:border-r ${borderClass} hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer text-right md:text-left`}
          aria-label="Toggle Theme"
        >
          {mounted && resolvedTheme === 'dark' ? 'Dark Edition' : 'Light Edition'}
        </button>

        {/* Cell 3: Time Info */}
        <div className={`col-span-1 p-4 md:p-6 text-xs font-mono uppercase tracking-widest ${mutedText} border-r lg:border-b-0 ${borderClass} flex items-center justify-between`}>
          <span>INDORE, IN</span>
          <span>{time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false })}</span>
        </div>

        {/* Cell 4: Date */}
        <div className={`col-span-1 p-4 md:p-6 text-xs font-mono uppercase tracking-widest ${mutedText} lg:border-b-0 ${borderClass} flex items-center justify-end`}>
           {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
    </header>
  );
};

export default Header;