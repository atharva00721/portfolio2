import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../../constants';
import { BlogPost } from '../../types';

interface BlogListProps {
  borderClass: string;
  mutedText: string;
  handleBlogClick: (blog: BlogPost) => void;
}

const BlogList: React.FC<BlogListProps> = ({
  borderClass,
  mutedText,
  handleBlogClick
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="grow flex flex-col"
    >
        <div className={`p-12 border-b ${borderClass}`}>
            <h1 className="font-serif text-5xl md:text-7xl mb-4">The Index</h1>
            <p className={`text-lg ${mutedText} max-w-2xl`}>
                Thoughts, notes, and essays on code, design, and the future.
            </p>
        </div>

        <div className="grow">
            {BLOG_POSTS.map((post) => (
                <div 
                    key={post.id}
                    onClick={() => handleBlogClick(post)}
                    className={`group p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12`}
                >
                    <div className={`text-xs font-mono uppercase tracking-widest w-32 shrink-0 ${mutedText} group-hover:text-purple-500 transition-colors`}>
                        {post.date}
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif italic mb-2 group-hover:underline decoration-1 underline-offset-4">{post.title}</h2>
                        <p className={`text-sm ${mutedText} max-w-prose`}>{post.excerpt}</p>
                    </div>
                    <div className={`hidden md:block ml-auto text-xs font-mono ${mutedText}`}>
                        {post.readTime}
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  );
};

export default BlogList;