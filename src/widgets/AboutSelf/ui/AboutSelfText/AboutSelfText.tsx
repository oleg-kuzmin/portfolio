import cn from 'classnames';
import styles from './AboutSelfText.module.scss';

interface AboutSelfTextProps {
  aboutData: string[];
  className?: string;
}

export function AboutSelfText({ aboutData, className }: Readonly<AboutSelfTextProps>) {
  const textElements = aboutData.map(text => {
    return (
      <p key={text} className={styles.AboutSelfText__Paragraph}>
        {text}
      </p>
    );
  });

  return <div className={cn(styles.AboutSelfText, className)}>{textElements}</div>;
}
