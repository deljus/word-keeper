export interface IconSVGProps {
  width: number;
  height: number;
}

export interface SizesType {
  sm: [number, number];
  lg: [number, number];
  md: [number, number];
}

export interface IconProps {
  size?: keyof SizesType;
  type: 'search' | 'arrowDown' | 'drugAndDrop' | 'star';
  className?: string;
}
