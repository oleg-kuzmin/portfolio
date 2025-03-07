import cn from 'classnames';
import styles from './ContactsElement.module.scss';

interface ContactsElementProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactsElement({ children, className }: Readonly<ContactsElementProps>) {
  return <li className={cn(styles.ContactsElement, className)}>{children}</li>;
}
