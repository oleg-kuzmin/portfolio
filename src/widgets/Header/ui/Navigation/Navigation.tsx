import cn from 'classnames';
import { NavigationElement } from './NavigationElement';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  return (
    <nav className={cn(styles.Navigation, className)}>
      <ul className={styles.Navigation__List}>
        <NavigationElement href="#about" text="Обо мне" />
        <NavigationElement href="#skills" text="Навыки" />
        <NavigationElement href="#projects" text="Проекты" />
        <NavigationElement href="#contacts" text="Контакты" />
      </ul>
    </nav>
  );
}
