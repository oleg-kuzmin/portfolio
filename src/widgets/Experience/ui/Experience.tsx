import cn from 'classnames';
import { ExpData } from '@/shared/lib/types';
import { SectionTitle } from '@/shared/ui';
import { ExperienceElement } from './ExperienceElement';
import styles from './Experience.module.scss';

interface ExperienceProps {
  expData: ExpData;
  className?: string;
}

export function Experience({ expData, className }: Readonly<ExperienceProps>) {
  const experienceElements = expData.map(exp => {
    return <ExperienceElement key={exp.title} exp={exp} />;
  });

  return (
    <section className={cn(styles.Experience, className)}>
      <div className={styles.Experience__Content}>
        <SectionTitle className={styles.Experience__SectionTitle} firstWord="Мой" secondWord="Опыт" />
        <div className={styles.Experience__List}>{experienceElements}</div>
      </div>
    </section>
  );
}
