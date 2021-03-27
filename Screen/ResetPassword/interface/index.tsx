export interface InputProps {
  input: { value: string; onChange: (value: string) => void };
  title: string;
}

export interface ModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}
