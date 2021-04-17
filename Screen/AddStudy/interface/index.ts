export interface ContentProps {
  title: string;
}

export interface TargetProps {
  select: { value: string; onChange: (value: string) => void };
}

export interface InputProps {
  title: string;
  input: { value: string; onChange: (value: string) => void };
  placeholder: string;
}
