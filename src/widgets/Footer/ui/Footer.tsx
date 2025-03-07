import cn from 'classnames';
import { ButtonLink, ListButtonLinks, Logo } from '@/shared/ui';
import { Contacts } from './Contacts';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: Readonly<FooterProps>) {
  return (
    <footer className={cn(styles.Footer, className)}>
      <ButtonLink className={styles.Footer__ButtonLinkUp} href="#" icon="up" />
      <Logo className={styles.Footer__Logo} />
      <ListButtonLinks className={styles.Footer__ListButtonLinks} />
      <Contacts />
    </footer>
  );
}
