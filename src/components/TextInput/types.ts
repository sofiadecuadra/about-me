export type TextInputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
};
