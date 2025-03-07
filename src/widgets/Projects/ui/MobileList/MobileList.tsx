import cn from 'classnames';
import { ProjectsData } from '@/shared/lib/types';
import { ProjectElement } from '../ProjectElement';
import styles from './MobileList.module.scss';

interface MobileListProps {
  projectsData: ProjectsData;
  className?: string;
}

export function MobileList({ projectsData, className }: Readonly<MobileListProps>) {
  const projectElements = projectsData.map(project => {
    return <ProjectElement key={project.title} project={project} media="mobile" />;
  });

  return <div className={cn(styles.MobileList, className)}>{projectElements}</div>;
}
