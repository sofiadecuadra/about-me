import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { ModalProps } from "./types";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  showCloseButton = true,
  closeOnOutsideClick = true,
  className,
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    
    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  const modalContent = (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        ref={containerRef}
        className={`${styles.container} ${styles[size]} ${
          isOpen ? styles.containerVisible : ""
        } ${className || ""}`}
      >
        {(title || showCloseButton) && (
          <div className={styles.header}>
            {title && <h6 className={styles.title}>{title}</h6>}
            {showCloseButton && (
              <button className={styles.closeButton} onClick={onClose}>
                ×
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;