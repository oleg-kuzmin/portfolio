import cn from 'classnames';
import { ContactsElement } from './ContactsElement';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  return (
    <address className={cn(styles.Contacts, className)} id="contacts">
      <ul className={cn(styles.Contacts__List, className)}>
        <ContactsElement>+7 (921) 899 40 62</ContactsElement>
        <ContactsElement>info@oleg-kuzmin.ru</ContactsElement>
      </ul>
    </address>
  );
}
