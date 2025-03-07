import cn from 'classnames';
import styles from './ButtonBurger.module.scss';

interface ButtonBurgerProps {
  isActive: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonBurger({ isActive, onClick, className }: Readonly<ButtonBurgerProps>) {
  return (
    <button className={cn(styles.ButtonBurger, className)} onClick={onClick} aria-label="Открыть меню навигации">
      <span className={cn(styles.ButtonBurger__Line, { [styles.ButtonBurger__Line_Active]: isActive })}></span>
      <span className={cn(styles.ButtonBurger__Line, { [styles.ButtonBurger__Line_Active]: isActive })}></span>
      <span className={cn(styles.ButtonBurger__Line, { [styles.ButtonBurger__Line_Active]: isActive })}></span>
    </button>
  );
}
