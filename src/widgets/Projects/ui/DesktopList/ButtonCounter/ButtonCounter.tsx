import cn from 'classnames';
import styles from './ButtonCounter.module.scss';

interface ButtonCounterProps {
  activeSlide: number;
  length: number;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonCounter({ activeSlide, length, onClick, className }: Readonly<ButtonCounterProps>) {
  return (
    <button className={cn(styles.ButtonCounter, className)} onClick={onClick}>
      {activeSlide + 1} / {length}
    </button>
  );
}
