import cn from 'classnames';
import styles from './ButtonUI.module.scss';

interface ButtonUIProps {
  icon: 'left' | 'right' | 'close';
  onClick: VoidFunction;
  className?: string;
}

export function ButtonUI({ icon = 'left', onClick, className }: Readonly<ButtonUIProps>) {
  let classIconModifierIcon: string;
  let ariaLabel: string;

  switch (icon) {
    case 'left':
      classIconModifierIcon = styles.ButtonUI_Left;
      ariaLabel = 'Листать налево';
      break;
    case 'right':
      classIconModifierIcon = styles.ButtonUI_Right;
      ariaLabel = 'Листать направо';
      break;
    case 'close':
      classIconModifierIcon = styles.ButtonUI_Close;
      ariaLabel = 'Закрыть';
      break;
  }

  return (
    <button
      className={cn(styles.ButtonUI, classIconModifierIcon, className)}
      onClick={onClick}
      aria-label={ariaLabel}
    ></button>
  );
}
