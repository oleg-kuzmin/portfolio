import cn from 'classnames';
import styles from './BurgerPanel.module.scss';

interface BurgerPanelProps {
  isActive: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function BurgerPanel({ isActive, onClick, className }: Readonly<BurgerPanelProps>) {
  return (
    <nav className={cn(styles.BurgerPanel, { [styles.BurgerPanel_Active]: isActive }, className)}>
      <ul className={styles.BurgerPanel__List}>
        <li>
          <a
            className={cn(styles.BurgerPanel__Link, styles.BurgerPanel__Link_Up)}
            href="#"
            tabIndex={-1}
            onClick={onClick}
          >
            Наверх
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#about" tabIndex={-1} onClick={onClick}>
            Обо Мне
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#skills" tabIndex={-1} onClick={onClick}>
            Навыки
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#projects" tabIndex={-1} onClick={onClick}>
            Проекты
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#contacts" tabIndex={-1} onClick={onClick}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
