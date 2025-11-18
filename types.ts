// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export enum SearchOption {
  Research = 'Research',
  Domain = 'Domain',
  Images = 'Images',
  Forums = 'Forums',
  YouTube = 'YouTube',
  AI = 'AI',
}

export interface OptionConfig {
  id: SearchOption;
  title: string;
  urlTemplate: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}