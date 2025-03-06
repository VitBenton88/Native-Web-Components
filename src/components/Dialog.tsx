import React, { useRef, useEffect } from 'react';

type DialogProps = {
  children?: React.ReactNode;
  isOpen: Boolean;
  useModal?: Boolean;
  onClose: Function;
};

const Dialog: React.FC<DialogProps> = ({ children, onClose, useModal = false, isOpen = false }): React.ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isOpen) {
      useModal ? dialogElement.showModal() : dialogElement.show();
    } else {
      dialogElement.close();
    }
  }, [isOpen, useModal]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const classNames = useModal ? 'modal' : '';

  return (
    <dialog data-testid='dialog' className={classNames} ref={dialogRef} onClose={handleClose}>
      {children}
    </dialog>
  );
};

export default Dialog;
