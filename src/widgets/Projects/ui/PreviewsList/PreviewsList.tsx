import cn from 'classnames';
import { HandleClickProjectPreview, ProjectsData } from '@/shared/lib/types';
import { ButtonUI } from '../ButtonUI';
import { ProjectPreview } from './ProjectPreview';
import styles from './PreviewsList.module.scss';

interface PreviewsListProps {
  projectsData: ProjectsData;
  onClickPreview: HandleClickProjectPreview;
  onClose: VoidFunction;
  className?: string;
}

export function PreviewsList({ projectsData, onClickPreview, onClose, className }: Readonly<PreviewsListProps>) {
  const previewElements = projectsData.map((project, index) => {
    return (
      <ProjectPreview
        index={index}
        key={project.title}
        src={project.image}
        alt={project.title}
        onClick={onClickPreview}
        title={project.description}
      />
    );
  });

  return (
    <div className={cn(styles.PreviewsList, className)}>
      <ButtonUI className={styles.PreviewsList__ButtonClose} icon="close" onClick={onClose} />
      <div className={styles.PreviewsList__Content}>{previewElements}</div>
    </div>
  );
}
