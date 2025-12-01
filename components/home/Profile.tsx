import React from 'react';
import NextImage from 'next/image';
import { ArrowRight } from 'lucide-react';
import { EXPERIENCE } from '../../constants';

interface ProfileProps {
  borderClass: string;
  mutedText: string;
  handleNav?: (view: 'experience') => void;
}

const Profile: React.FC<ProfileProps> = ({ borderClass, mutedText, handleNav }) => {
  return (
    <>
      {/* Profile Image */}
      <div className={`p-6 md:p-8 border-b ${borderClass} flex justify-center bg-neutral-100/30 dark:bg-neutral-900/10`}>
        <div className="w-full h-48 overflow-hidden border border-neutral-300 dark:border-neutral-700 grayscale hover:grayscale-0 transition-all duration-500 relative">
          <NextImage 
            src="https://i.pinimg.com/1200x/cb/7d/e7/cb7de7eff8a5018aa0ca5a06082f3bda.jpg" 
            alt="Atharva Raj" 
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Now Building (Latest Role) */}
      <div 
        className={`group p-6 md:p-8 border-b ${borderClass} cursor-pointer transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50`}
        onClick={() => handleNav && handleNav('experience')}
      >
        <div className="mb-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif italic text-2xl group-hover:text-purple-500 transition-colors">Experience</h3>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
               <ArrowRight className="w-5 h-5" />
            </span>
          </div>
          <h3 className="text-xl font-bold">{EXPERIENCE[0].company}</h3>
          <p className={`text-sm font-serif ${mutedText} mb-4`}>{EXPERIENCE[0].role}</p>
          <p className={`${mutedText} text-sm line-clamp-3`}>
            {EXPERIENCE[0].description[0]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
