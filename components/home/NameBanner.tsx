import React from 'react';

interface NameBannerProps {
  borderClass: string;
}

const NameBanner: React.FC<NameBannerProps> = ({ borderClass }) => {
  return (
    <div className={`border-b ${borderClass}`}>
      <div className="p-6 md:p-20 lg:p-24 relative overflow-hidden group text-left pt-10 pb-0 md:text-center">
        <h1 className="font-serif text-4xl md:text-7xl lg:text-9xl tracking-tighter cursor-default z-10 relative inline-block">
          ATHARVA RAJ
        </h1>
      </div>
    </div>
  );
};

export default NameBanner;
