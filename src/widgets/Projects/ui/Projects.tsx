'use client';

import cn from 'classnames';
import { useWindowSize } from '@/shared/lib/hooks';
import { ProjectsData } from '@/shared/lib/types';
import { SectionTitle } from '@/shared/ui';
import { DesktopList } from './DesktopList';
import { MobileList } from './MobileList';
import styles from './Projects.module.scss';

interface ProjectsProps {
  projectsData: ProjectsData;
  className?: string;
}

export function Projects({ projectsData, className }: Readonly<ProjectsProps>) {
  const size = useWindowSize();

  return (
    <section className={cn(styles.Projects, className)} id="projects">
      <div className={styles.Projects__Content}>
        <SectionTitle className={styles.Projects__SectionTitle} firstWord="Мои" secondWord="Проекты" />
        {size.innerWidth >= 1440 ? (
          <DesktopList projectsData={projectsData} />
        ) : (
          <MobileList projectsData={projectsData} />
        )}
      </div>
    </section>
  );
}
