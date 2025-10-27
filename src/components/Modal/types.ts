import { ReactNode } from "react";

export type ModalSize = "small" | "medium" | "large" | "full";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  className?: string;
};
