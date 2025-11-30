import React from 'react';
import { EDUCATION } from '../../constants';

interface EducationProps {
  borderClass: string;
  mutedText: string;
}

const Education: React.FC<EducationProps> = ({ borderClass, mutedText }) => {
  return (
    <div className={`p-6 md:p-8 border-b ${borderClass}`}>
      <h3 className="font-serif italic text-xl mb-6">Education</h3>
      <div>
        <div className="flex justify-between items-baseline mb-1">
          <h4 className="font-bold uppercase tracking-wide">{EDUCATION.institution.split('(')[0]}</h4>
        </div>
        <span className={`text-xs ${mutedText} font-mono mb-2 block`}>{EDUCATION.duration}</span>
        <p className={`text-sm ${mutedText} italic`}>{EDUCATION.degree}</p>
        <div className="mt-4 inline-block border border-dashed border-neutral-500 px-2 py-1 text-xs font-mono">
          INDORE, INDIA
        </div>
      </div>
    </div>
  );
};

export default Education;
