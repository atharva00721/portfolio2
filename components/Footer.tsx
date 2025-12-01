import React from 'react';
import NextImage from 'next/image';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { EMAIL, SOCIALS } from '../constants';

interface FooterProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ borderClass, mutedText, isDark }) => {
  return (
    <footer id="contact" className={`border-t ${borderClass} mt-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className={`p-8 md:p-12 border-b md:border-b-0 md:border-r ${borderClass}`}>
                 <h3 className="font-serif italic text-2xl mb-4">Let&apos;s build something
exceptional together.
</h3>
                 <div className="block w-48 md:w-64 relative h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity">
                    <NextImage 
                        src="/signature.png" 
                        alt={EMAIL}
                        fill
                        className={`object-contain object-left ${isDark ? 'invert' : ''}`}
                    />
                 </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                    {SOCIALS.map((social) => (
                        <a 
                            key={social.name} 
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 p-3 border ${isDark ? 'border-neutral-800 hover:bg-neutral-800' : 'border-neutral-300 hover:bg-neutral-200'} transition-colors group`}
                        >
                            {social.name === 'GitHub' && <Github size={18} />}
                            {social.name === 'LinkedIn' && <Linkedin size={18} />}
                            {social.name === 'Email' && <Mail size={18} />}
                            {social.name === 'Twitter' && <Twitter size={18} />}
                            <span className="text-sm font-medium">{social.name}</span>
                        </a>
                    ))}
                </div>
                <div className={`mt-8 text-right text-xs font-mono ${mutedText}`}>
                    &copy; 2025 ATHARVA RAJ SINGH THAKUR
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;