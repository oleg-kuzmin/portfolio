import cn from 'classnames';
import styles from './HeroText.module.scss';

interface HeroTextProps {
  text: string;
  className?: string;
}

export function HeroText({ text, className }: Readonly<HeroTextProps>) {
  return <p className={cn(styles.HeroText, className)}>{text}</p>;
}
