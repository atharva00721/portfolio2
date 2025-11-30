import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogDetailProps {
  blog: BlogPost;
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({
  blog,
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
        transition={{ duration: 0.4 }}
        className="flex-grow flex flex-col"
    >
        {/* Newspaper Header Bar */}
        <div className={`flex justify-between items-center p-4 border-b ${borderClass} bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-30`}>
            <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-purple-500 transition-colors"
            >
                <ArrowLeft size={14} /> Back to Index
            </button>
            <span className={`text-[10px] font-mono uppercase tracking-widest ${mutedText}`}>
                Print Edition • Vol. 01
            </span>
        </div>

        <div className="p-8 md:p-16 max-w-none mx-auto w-full">
            {/* Article Title Header */}
            <div className="text-center mb-12 md:mb-16 border-b-2 border-black dark:border-white pb-12">
                <div className={`flex justify-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest ${mutedText}`}>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime} Read</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                    {blog.title}
                </h1>
                <div className="flex justify-center gap-2">
                    {blog.tags.map(tag => (
                        <span key={tag} className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Newspaper Body Content */}
            <article className={`
                prose dark:prose-invert max-w-none 
                prose-p:text-justify prose-p:leading-relaxed prose-p:mb-6
                prose-headings:font-serif prose-headings:italic
                md:columns-2 gap-12
                ${isDark ? 'text-neutral-300' : 'text-neutral-800'}
            `}>
                <div className="first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:font-bold first-letter:leading-none first-letter:mt-[-6px]">
                    {blog.content}
                </div>
            </article>

             {/* Footer Mark */}
             <div className="flex justify-center mt-16 mb-8">
                <div className="w-16 h-px bg-current opacity-20"></div>
                <span className="mx-4 font-serif italic text-2xl relative top-[-14px]">❧</span>
                <div className="w-16 h-px bg-current opacity-20"></div>
            </div>
        </div>
    </motion.div>
  );
};

export default BlogDetail;