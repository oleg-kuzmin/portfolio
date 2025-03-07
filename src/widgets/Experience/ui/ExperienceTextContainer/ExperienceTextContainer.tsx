import cn from 'classnames';
import styles from './ExperienceTextContainer.module.scss';

interface ExperienceTextContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ExperienceTextContainer({ children, className }: Readonly<ExperienceTextContainerProps>) {
  return <ul className={cn(styles.ExperienceTextContainer, className)}>{children}</ul>;
}
