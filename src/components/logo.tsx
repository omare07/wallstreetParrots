import React from 'react';
import Image from 'next/image';

export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Image
      src="/wallstreet-parrots-logo.png"
      alt="WallStreet Parrots Logo"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
}; 