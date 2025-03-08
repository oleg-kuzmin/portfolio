import cn from 'classnames';
import Image from 'next/image';
import { Project } from '@/shared/lib/types';
import { TextParagraph } from '@/shared/ui';
import { ButtonProjectLink } from './ButtonProjectLink';
import { TextLegend } from './TextLegend';
import styles from './ProjectElement.module.scss';

interface ProjectElementProps {
  media: 'mobile' | 'desktop';
  project: Project;
  className?: string;
}

export function ProjectElement({ media, project, className }: Readonly<ProjectElementProps>) {
  const functionalElements = project.functional.map(text => {
    return (
      <TextParagraph key={text} marker>
        {text}
      </TextParagraph>
    );
  });

  const technologiesElements = project.technologies.map(text => {
    return (
      <TextParagraph key={text} marker>
        {text}
      </TextParagraph>
    );
  });

  const imageElement =
    media === 'mobile' ? (
      <Image
        className={styles.ProjectElement__Image}
        src={project.image}
        alt={project.title}
        width={0}
        height={0}
        sizes="100%"
        style={{ width: '100%', height: 'auto' }}
      />
    ) : (
      <Image
        className={styles.ProjectElement__Image}
        src={project.image}
        alt={project.title}
        width={580}
        height={667}
      />
    );

  return (
    <article className={cn(styles.ProjectElement, className)}>
      {imageElement}
      <div className={styles.ProjectElement__Description}>
        <h3 className={styles.ProjectElement__Title}>{project.title}</h3>
        <div className={styles.ProjectElement__Buttons}>
          <ButtonProjectLink href={project.hrefSite} icon="site" text="Открыть сайт" />
          <ButtonProjectLink href={project.hrefGit} icon="git" text="Открыть github" />
        </div>
        <TextParagraph>{project.description}</TextParagraph>
        {project.functional.length > 0 && <TextLegend>Функционал</TextLegend>}
        {project.functional.length > 0 && functionalElements}
        {project.technologies.length > 0 && <TextLegend>Технологии</TextLegend>}
        {project.technologies.length > 0 && technologiesElements}
      </div>
    </article>
  );
}
