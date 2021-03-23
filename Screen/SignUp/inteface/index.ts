export enum Status {
  NORMARL = 'NORMAL',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface InputProps {
  input: { value: string; onChange: (value: string) => void };
  error: { status: Status; text: string };
  confirm?: { confirm: boolean; setConfirm: (value: boolean) => void };
}

export interface WarningProps {
  color: boolean;
}
