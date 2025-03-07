import cn from 'classnames';
import styles from './AboutSelfDescription.module.scss';

interface AboutSelfDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function AboutSelfDescription({ children, className }: Readonly<AboutSelfDescriptionProps>) {
  return <div className={cn(styles.AboutSelfDescription, className)}>{children}</div>;
}
