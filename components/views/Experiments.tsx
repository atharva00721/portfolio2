import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { PlaygroundItem } from '../../types';
import { PLAYGROUND_ITEMS } from '../../constants';

interface PlaygroundProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleNav: (target: 'home') => void;
  handleExperimentClick: (item: PlaygroundItem) => void;
}

const Experiments: React.FC<PlaygroundProps> = ({ 
  borderClass, 
  mutedText, 
  isDark,
  handleNav,
  handleExperimentClick
}) => {
  // Split items for layout: 1st is Cover Story, rest are columns
  const coverStory = PLAYGROUND_ITEMS[0];
  const sideStories = PLAYGROUND_ITEMS.slice(1);

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="grow flex flex-col"
    >
        {/* Masthead */}
        <div className={`border-b-[0.5px] ${borderClass} p-8 md:p-12 text-center`}>
            {/* <div className={`flex justify-between items-center border-b ${borderClass} pb-2 mb-4 text-xs font-mono uppercase tracking-widest ${mutedText}`}>
                <span>Vol. 01</span>
                <span>The Lab</span>
                <span>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div> */}
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-none">
                Experiments
            </h1>
            <div className={`flex justify-center items-center gap-4 mt-4 text-xs font-mono uppercase tracking-widest ${mutedText}`}>
                <span>Experimental</span>
                <Star size={10} className="fill-current" />
                <span>Creative</span>
                <Star size={10} className="fill-current" />
                <span>Interactive</span>
            </div>
        </div>

        {/* Magazine Grid */}
        <div className="grow flex flex-col">
            
            {/* Row 1: Cover Story (Full Width) */}
            <div className={`border-b ${borderClass} p-6 md:p-10 flex flex-col`}>
                <div className="mb-6 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Cover Story</span>
                    <span className={`text-xs font-mono uppercase ${mutedText}`}>Featured Project</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-8">
                         <div 
                            className="aspect-4/3 w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
                            onClick={() => handleExperimentClick(coverStory)}
                        >
                            <img 
                                src={coverStory.imageUrl} 
                                alt={coverStory.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <h2 className="font-serif text-4xl md:text-6xl leading-[0.9] mb-6 hover:underline decoration-2 underline-offset-4 cursor-pointer" onClick={() => handleExperimentClick(coverStory)}>
                            {coverStory.title}
                        </h2>
                        <p className="text-lg md:text-xl font-serif leading-relaxed mb-6">
                            {coverStory.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {coverStory.techStack.map((t) => (
                                <span key={t} className={`text-xs font-mono uppercase border ${borderClass} px-2 py-1`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <button 
                            onClick={() => handleExperimentClick(coverStory)}
                            className="flex items-center gap-2 font-bold uppercase tracking-wider hover:text-red-500 transition-colors w-fit"
                        >
                            Read More <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Row 2: Split Columns (2 Left, 3 Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 grow">
                
                {/* Left Column: 2 Items */}
                <div className={`lg:col-span-5 border-r ${borderClass} flex flex-col`}>
                    {sideStories.slice(0, 2).map((item, idx) => (
                        <div 
                            key={item.id} 
                            className={`p-6 md:p-8 border-b ${borderClass} ${idx === 1 ? 'lg:border-b-0' : ''} group hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer grow`}
                            onClick={() => handleExperimentClick(item)}
                        >
                             <div className={`text-xs font-mono uppercase ${mutedText} mb-2`}>0{idx + 2} — {item.techStack[0]}</div>
                             <div className="aspect-video w-full overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                 <img 
                                    src={item.imageUrl} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                                {item.title}
                            </h3>
                            <p className={`text-sm ${mutedText} line-clamp-2`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column: 3 Items */}
                <div className="lg:col-span-7 flex flex-col">
                     {sideStories.slice(2, 5).map((item, idx) => (
                        <div 
                            key={item.id} 
                            className={`p-6 md:p-8 border-b ${borderClass} flex gap-6 group hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer`}
                            onClick={() => handleExperimentClick(item)}
                        >
                            <div className="w-1/3 shrink-0 aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className={`text-xs font-mono uppercase ${mutedText} mb-1`}>0{idx + 4} — {item.techStack[0]}</div>
                                <h3 className="font-serif text-xl md:text-2xl mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                                    {item.title}
                                </h3>
                                <p className={`text-sm ${mutedText} line-clamp-2`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Back Home Link */}
                    <div className={`p-6 md:p-8 mt-auto text-center`}>
                        <button 
                            onClick={() => handleNav('home')}
                            className="font-serif italic text-xl hover:underline decoration-wavy underline-offset-4"
                        >
                            ← Return to Index
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  );
};

export default Experiments;
