import cn from 'classnames';
import styles from './NavigationElement.module.scss';

interface NavigationElementProps {
  href: string;
  text: string;
  className?: string;
}

export function NavigationElement({ href, text, className }: Readonly<NavigationElementProps>) {
  return (
    <li className={cn(styles.NavigationElement, className)}>
      <a className={styles.NavigationElement__Link} href={href}>
        {text}
      </a>
    </li>
  );
}
