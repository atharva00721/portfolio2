import React from 'react';
import { SKILLS } from '../../constants';

interface SkillsProps {
  borderClass: string;
  mutedText: string;
}

const Skills: React.FC<SkillsProps> = ({ borderClass }) => {
  return (
    <div className={`p-6 md:p-8 border-b ${borderClass}`}>
      <h3 className="font-serif italic text-xl mb-6">Tools & Tech</h3>
      <div className="space-y-6">
        {SKILLS.map((cat) => (
          <div key={cat.category}>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-3 opacity-60">{cat.category}</h4>
            <ul className="space-y-2">
              {cat.skills.map(skill => (
                <li key={skill} className="flex justify-between text-sm border-b border-dashed border-neutral-700/30 pb-1">
                  <span>{skill}</span>
                  <span className="opacity-30">[EXP]</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
