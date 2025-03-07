import cn from 'classnames';
import { ExpIcon } from '@/shared/lib/types';
import styles from './ExperienceTitle.module.scss';

interface ExperienceTitleProps {
  title: string;
  icon: ExpIcon;
  date: string;
  className?: string;
}

export function ExperienceTitle({ title, icon, date, className }: Readonly<ExperienceTitleProps>) {
  let classModifier: string;

  switch (icon) {
    case 'v6':
      classModifier = styles.ExperienceTitle__Text_V6;
      break;
    case 'yandex':
      classModifier = styles.ExperienceTitle__Text_Yandex;
      break;
  }

  return (
    <div className={cn(styles.ExperienceTitle, className)}>
      <h3 className={cn(styles.ExperienceTitle__Text, classModifier)}>{title}</h3>
      <span className={styles.ExperienceTitle__Date}>{date}</span>
    </div>
  );
}
