import React from "react";

export type TextBoxProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  height?: string;
  width?: string;
  multiline?: boolean;
  setField: (field: string) => void;
  error?: string;
  setError: (error: string) => void;
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  name?: string;
  className?: string;
};
