import cn from 'classnames';
import { ButtonLink } from '../ButtonLink';
import styles from './ListButtonLinks.module.scss';

interface ListButtonLinksProps {
  className?: string;
}

export function ListButtonLinks({ className }: Readonly<ListButtonLinksProps>) {
  return (
    <ul className={cn(styles.ListButtonLinks, className)}>
      <li>
        <ButtonLink href="https://github.com/oleg-kuzmin" title="github.com/oleg-kuzmin" icon="git" />
      </li>
      <li>
        <ButtonLink href="https://t.me/Oleg_Kuzmin_Web" title="@Oleg_Kuzmin_Web" icon="telegram" />
      </li>
      <li>
        <ButtonLink href="mailto:info@oleg-kuzmin.ru" title="info@oleg-kuzmin.ru" icon="email" />
      </li>
      <li>
        <ButtonLink href="tel:+79218994062" title="+7 (921) 899-40-62" icon="phone" />
      </li>
    </ul>
  );
}
