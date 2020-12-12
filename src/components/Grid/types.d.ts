import { ReactNode } from "react";

export interface GridProps {
  className?: string;
  children?: ReactNode;
}

export interface ColProps {
  className?: string;
  children?: ReactNode;
  span?: number;
}

export interface RowProps {
  className?: string;
  children?: ReactNode;
}
