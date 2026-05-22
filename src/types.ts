export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface TwoColProps {
  left: React.ReactNode;
  right: React.ReactNode;
  flip?: boolean;
}

export interface ColImgProps {
  src: string;
  alt: string;
  maxH?: string;
}

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface InfoTableProps {
  head: string[];
  rows: string[][];
}

export interface Faculty {
  num: string;
  name: string;
  years: string;
}