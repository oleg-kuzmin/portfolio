import cn from 'classnames';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  href: string;
  icon: 'email' | 'git' | 'telegram' | 'phone' | 'up';
  title?: string;
  className?: string;
}

export function ButtonLink({ href, title, icon, className }: Readonly<ButtonLinkProps>) {
  let classModifier: string;
  let ariaLabel: string;

  switch (icon) {
    case 'email':
      classModifier = styles.ButtonLink_Email;
      ariaLabel = 'Открытие почтовой программы';
      break;
    case 'git':
      classModifier = styles.ButtonLink_Git;
      ariaLabel = 'Открытие сайта github';
      break;
    case 'phone':
      classModifier = styles.ButtonLink_Phone;
      ariaLabel = 'Звонок по телефону';
      break;
    case 'telegram':
      classModifier = styles.ButtonLink_Telegram;
      ariaLabel = 'Открытие сайта телеграм';
      break;
    case 'up':
      classModifier = styles.ButtonLink_Up;
      ariaLabel = 'Подняться наверх';
      break;
  }

  return (
    <a
      className={cn(styles.ButtonLink, classModifier, className)}
      title={title}
      aria-label={ariaLabel}
      href={href}
    ></a>
  );
}
