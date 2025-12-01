import React from 'react';
import { motion } from 'framer-motion';
import GitHubGraph from '../GitHubGraph';
import { Project } from '../../types';
import NameBanner from '../home/NameBanner';
import Intro from '../home/Intro';
import Profile from '../home/Profile';
import FeaturedProjects from '../home/FeaturedProjects';
import Skills from '../home/Skills';
import Education from '../home/Education';

interface HomeProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleProjectClick: (project: Project) => void;
  handleNav: (view: 'projects' | 'experience') => void;
}

const Home: React.FC<HomeProps> = ({ 
  borderClass, 
  mutedText, 
  isDark, 
  handleProjectClick, 
  handleNav 
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
        className="grow flex flex-col"
    >
        {/* Main Name Banner */}
        <NameBanner borderClass={borderClass} />

        {/* Main Content Grid */}
        <main className="grow grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Intro, Projects, & GitHub */}
            <div className={`lg:col-span-7 border-b lg:border-b-0 lg:border-r ${borderClass}`}>
                
                {/* Intro Section */}
                <Intro borderClass={borderClass} mutedText={mutedText} isDark={isDark} />

                {/* MOBILE ONLY: Profile Image & Experience */}
                <div className="block lg:hidden">
                    <Profile borderClass={borderClass} mutedText={mutedText} handleNav={handleNav} />
                </div>

                {/* Featured Projects Grid */}
                <FeaturedProjects 
                  borderClass={borderClass} 
                  mutedText={mutedText} 
                  isDark={isDark} 
                  handleProjectClick={handleProjectClick} 
                  handleNav={handleNav} 
                />

                {/* GitHub Section */}
                <div className={`p-6 md:p-8 border-b ${borderClass}`}>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-serif italic text-2xl mb-4">GitHub Contributions</h3>
                        <span className={`text-xs ${mutedText}`}>Last Year</span>
                    </div>
                    <GitHubGraph />
                </div>
            </div>

            {/* Right Column: Experience, Skills, Education */}
            <div className="lg:col-span-5">
                
                {/* DESKTOP ONLY: Profile Image & Experience */}
                <div className="hidden lg:block">
                    <Profile borderClass={borderClass} mutedText={mutedText} handleNav={handleNav} />
                </div>

                {/* Skills Section */}
                <Skills borderClass={borderClass} mutedText={mutedText} />

                 {/* Education */}
                 <Education borderClass={borderClass} mutedText={mutedText} />
            </div>
        </main>
    </motion.div>
  );
};

export default Home;