import cn from 'classnames';
import styles from './ExperienceContainer.module.scss';

interface ExperienceContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ExperienceContainer({ children, className }: Readonly<ExperienceContainerProps>) {
  return <div className={cn(styles.ExperienceContainer, className)}>{children}</div>;
}
