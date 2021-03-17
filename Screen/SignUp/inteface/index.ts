export interface InputProps {
  input: { value: string; onChange: (value: string) => void };
  error?: string;
  title?: string;
}

export interface WarningProps {
  color: string;
}
