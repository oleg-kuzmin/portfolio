import cn from 'classnames';
import { SkillsData } from '@/shared/lib/types';
import { SectionTitle } from '@/shared/ui';
import { SkillElement } from './SkillElement';
import { SkillsList } from './SkillsList';
import styles from './Skills.module.scss';

interface SkillsProps {
  skillsData: SkillsData;
  className?: string;
}

export function Skills({ skillsData, className }: Readonly<SkillsProps>) {
  const skillsElements = skillsData.map(skill => {
    return <SkillElement key={skill.title} title={skill.title} src={skill.src} alt={skill.alt} />;
  });

  return (
    <section className={cn(styles.Skills, className)} id="skills">
      <SectionTitle firstWord="Технические" secondWord="Навыки" />
      <SkillsList className={styles.Skills__List}>{skillsElements}</SkillsList>
    </section>
  );
}
