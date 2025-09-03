
export enum SearchOption {
  Research = 'Research',
  Domain = 'Domain',
  Images = 'Images',
  Forums = 'Forums',
  YouTube = 'YouTube',
}

export interface OptionConfig {
  id: SearchOption;
  title: string;
  urlTemplate: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
