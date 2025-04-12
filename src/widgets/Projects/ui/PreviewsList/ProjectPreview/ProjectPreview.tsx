import cn from 'classnames';
import Image from 'next/image';
import { HandleClickProjectPreview } from '@/shared/lib/types';
import styles from './ProjectPreview.module.scss';

interface ProjectPreviewProps {
  src: string;
  alt: string;
  title: string;
  index: number;
  onClick: HandleClickProjectPreview;
  className?: string;
}

export function ProjectPreview({ src, alt, title, index, onClick, className }: Readonly<ProjectPreviewProps>) {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <button className={cn(styles.ProjectPreview, className)} onClick={handleClick}>
      <Image
        className={cn(styles.ProjectPreview__Image)}
        src={src}
        alt={alt}
        width={200}
        height={230}
        priority={true}
        title={title}
      />
    </button>
  );
}
