import React from 'react';
import NextImage from 'next/image';
import { EXPERIENCE } from '../../constants';

interface ProfileProps {
  borderClass: string;
  mutedText: string;
}

const Profile: React.FC<ProfileProps> = ({ borderClass, mutedText }) => {
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
      <div className={`p-6 md:p-8 border-b ${borderClass}`}>
        <div className="mb-1">
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
