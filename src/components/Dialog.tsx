import React, { useRef, useEffect } from 'react';

type DialogProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  useModal?: boolean;
  onClose: () => void;
};

const Dialog: React.FC<DialogProps> = ({ children, onClose, useModal = false, isOpen = false }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isOpen) {
      const showMethod = useModal ? 'showModal' : 'show';
      dialogElement[showMethod]();
    } else {
      dialogElement.close();
    }
  }, [isOpen, useModal]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isOpen && useModal && e.key === 'Escape') {
        handleClose(); // default modal closes on esc key
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isOpen, useModal, handleClose])

  const classNames = useModal ? 'modal' : '';

  return (
    <dialog className={classNames} ref={dialogRef} onClose={handleClose} data-testid='dialog'>
      {children}
    </dialog>
  );
};

export default Dialog;
