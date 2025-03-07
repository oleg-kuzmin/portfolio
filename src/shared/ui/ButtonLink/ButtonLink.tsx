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
  let target: string;

  switch (icon) {
    case 'email':
      classModifier = styles.ButtonLink_Email;
      ariaLabel = 'Открытие почтовой программы';
      target = '_self';
      break;
    case 'git':
      classModifier = styles.ButtonLink_Git;
      ariaLabel = 'Открытие сайта github';
      target = '_blank';
      break;
    case 'phone':
      classModifier = styles.ButtonLink_Phone;
      ariaLabel = 'Звонок по телефону';
      target = '_self';
      break;
    case 'telegram':
      classModifier = styles.ButtonLink_Telegram;
      ariaLabel = 'Открытие сайта телеграм';
      target = '_blank';
      break;
    case 'up':
      classModifier = styles.ButtonLink_Up;
      ariaLabel = 'Подняться наверх';
      target = '_self';
      break;
  }

  return (
    <a
      className={cn(styles.ButtonLink, classModifier, className)}
      title={title}
      aria-label={ariaLabel}
      href={href}
      target={target}
    ></a>
  );
}
