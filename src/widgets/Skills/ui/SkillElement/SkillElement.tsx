import cn from 'classnames';
import Image from 'next/image';
import styles from './SkillElement.module.scss';

interface SkillElementProps {
  title: string;
  src: string;
  alt: string;
  className?: string;
}

export function SkillElement({ title, src, alt, className }: Readonly<SkillElementProps>) {
  return (
    <li className={cn(styles.SkillElement, className)}>
      <Image className={styles.SkillElement__Icon} src={src} alt={alt} width={0} height={0} />
      <span className={styles.SkillElement__Title}>{title}</span>
    </li>
  );
}
