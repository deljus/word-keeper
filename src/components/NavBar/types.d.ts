import { ReactNode } from 'react';

export interface NavBarProps {
  children?: ReactNode;
  className?: string;
}

export type NavProps = NavBarProps;

export interface NavLinkProps extends NavBarProps {
  to: string;
}
