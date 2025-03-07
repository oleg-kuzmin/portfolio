import cn from 'classnames';
import { ListButtonLinks } from '@/shared/ui';
import { HeroHeading } from './HeroHeading';
import { HeroImage } from './HeroImage';
import { HeroText } from './HeroText';
import styles from './Hero.module.scss';

interface HeroProps {
  text: string;
  className?: string;
}

export function Hero({ text, className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.Hero, className)}>
      <HeroImage className={styles.Hero__Image} />
      <HeroHeading className={styles.Hero__Heading} />
      <HeroText className={styles.Hero__Text} text={text} />
      <ListButtonLinks className={styles.Hero__ListButtonLinks} />
    </section>
  );
}
