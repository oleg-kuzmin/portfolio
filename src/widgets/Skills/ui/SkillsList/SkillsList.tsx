import cn from 'classnames';
import styles from './SkillsList.module.scss';

interface SkillsListProps {
  children: React.ReactNode;
  className?: string;
}

export function SkillsList({ children, className }: Readonly<SkillsListProps>) {
  return <ul className={cn(styles.SkillsList, className)}>{children}</ul>;
}
