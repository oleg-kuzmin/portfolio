import cn from 'classnames';
import { SectionTitle } from '@/shared/ui';
import { AboutSelfDescription } from './AboutSelfDescription';
import { AboutSelfImage } from './AboutSelfImage';
import { AboutSelfText } from './AboutSelfText';
import styles from './AboutSelf.module.scss';

interface AboutSelfProps {
  aboutData: string[];
  className?: string;
}

export function AboutSelf({ aboutData, className }: Readonly<AboutSelfProps>) {
  return (
    <section className={cn(styles.AboutSelf, className)} id="about">
      <AboutSelfImage />
      <AboutSelfDescription>
        <SectionTitle className={styles.AboutSelf__SectionTitle} firstWord="Обо" secondWord="Мне" />
        <AboutSelfText aboutData={aboutData} />
      </AboutSelfDescription>
    </section>
  );
}
