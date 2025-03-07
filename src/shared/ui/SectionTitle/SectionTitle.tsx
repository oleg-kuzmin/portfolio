import cn from 'classnames';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  firstWord: string;
  secondWord: string;
  id?: string;
  className?: string;
}

export function SectionTitle({ id, firstWord, secondWord, className }: Readonly<SectionTitleProps>) {
  return (
    <h2 className={cn(styles.SectionTitle, className)} id={id}>
      <span className={styles.SectionTitle__Regular}>{firstWord}</span>
      <span className={styles.SectionTitle__ExtraBold}>{secondWord}</span>
    </h2>
  );
}
