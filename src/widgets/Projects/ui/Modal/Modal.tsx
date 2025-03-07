'use client';

import { useEffect } from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: VoidFunction;
  className?: string;
}

export function Modal({ children, isActive, onClose, className }: Readonly<ModalProps>) {
  useEffect(() => {
    const handleClickPage = (evt: MouseEvent) => {
      if ((evt.target as Element).classList.contains(styles.Modal)) {
        onClose();
      }
    };

    const handleKeydownEscape = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickPage);
    document.addEventListener('keydown', handleKeydownEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickPage);
      document.removeEventListener('keydown', handleKeydownEscape);
    };
  }, [onClose]);

  return <div className={cn(styles.Modal, { [styles.Modal_Active]: isActive }, className)}>{children}</div>;
}
