import cn from 'classnames';
import styles from './HeroHeading.module.scss';

interface HeroHeadingProps {
  className?: string;
}

export function HeroHeading({ className }: Readonly<HeroHeadingProps>) {
  return (
    <div className={cn(styles.HeroHeading, className)}>
      <h1 className={styles.HeroHeading__Title}>
        <span className={styles.HeroHeading__Row}>
          <span className={styles.HeroHeading__Regular}>Привет! Я</span>
          <span className={styles.HeroHeading__ExtraBold}>Олег Кузьмин</span>
        </span>
        <span className={styles.HeroHeading__Row}>
          <span className={styles.HeroHeading__ExtraBold}>Frontend</span>
          <span className={styles.HeroHeading__Outside}>Разработчик</span>
        </span>
        <span className={styles.HeroHeading__Row}>
          <span className={styles.HeroHeading__Regular}>Санкт-Петербург, Россия</span>
        </span>
      </h1>
    </div>
  );
}
