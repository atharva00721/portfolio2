import React from 'react';

interface IntroProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
}

const Intro: React.FC<IntroProps> = ({ borderClass, mutedText, isDark }) => {
  return (
    <div className={`p-6 md:p-12 border-b ${borderClass}`}>
      <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight uppercase">
        Meet Your<br/>
        New Favourite<br/>
        Developer
      </h2>
      <p className={`text-base md:text-lg leading-relaxed ${mutedText} mb-8 max-w-prose`}>
        I build interactive web apps using React, Next.js, and TypeScript. 
        With a focus on UI design and performance, I aim to create 
        digital experiences that feel as timeless as print.
      </p>
      <div className="flex gap-4">
        <a 
          href="https://drive.google.com/file/d/1ZerfeEQeWFcvazwPAa0Eo2TAiEC3KOaX/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`px-6 py-3 text-sm font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity`}
        >
          Read Resume
        </a>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          className={`px-6 py-3 text-sm font-bold uppercase tracking-wider border ${isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-300 hover:bg-neutral-200'} transition-colors`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Intro;
