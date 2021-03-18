export interface InputProps {
  input: { value: string; onChange: (value: string) => void };
  error?: string;
}

export interface WarningProps {
  color: string;
}
