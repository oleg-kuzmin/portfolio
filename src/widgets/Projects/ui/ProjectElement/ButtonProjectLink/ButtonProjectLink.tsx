import cn from 'classnames';
import styles from './ButtonProjectLink.module.scss';

interface ButtonProjectLinkProps {
  icon: 'site' | 'git';
  text: string;
  href: string;
  className?: string;
}

export function ButtonProjectLink({ icon, text, href, className }: Readonly<ButtonProjectLinkProps>) {
  let classModifier: string;

  switch (icon) {
    case 'site':
      classModifier = styles.ButtonProjectLink_Arrow;
      break;
    case 'git':
      classModifier = styles.ButtonProjectLink_Git;
      break;
  }

  return (
    <a className={cn(styles.ButtonProjectLink, classModifier, className)} href={href} target="_blank">
      {text}
    </a>
  );
}
