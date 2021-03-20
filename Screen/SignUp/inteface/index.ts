export enum Status {
  NORMARL = 'NORMAL',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface InputProps {
  input: { value: string; onChange: (value: string) => void };
  error: { status: Status; text: string };
}

export interface WarningProps {
  color: boolean;
}
