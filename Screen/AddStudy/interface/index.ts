export interface ContentProps {
  title: string;
  subTitle?: string;
}

export interface TargetProps {
  target: number[];
  setTarget: (prev: (prev: number[]) => number[]) => void;
}

export interface InputProps {
  title: string;
  input: { value: string; onChange: (value: string) => void };
  placeholder: string;
  onlineFlag?: number;
}

export interface LongInputProps {
  input: { value: string; onChange: (value: string) => void };
}

export interface ColorProps {
  color: boolean;
}
