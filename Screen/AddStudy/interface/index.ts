export interface ContentProps {
  title: string;
}

export interface TargetProps {
  select: { value: string; onChange: (value: string) => void };
}
