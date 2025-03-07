import cn from 'classnames';
import styles from './TextParagraph.module.scss';

interface TextParagraphProps {
  children: React.ReactNode;
  marker?: boolean;
  className?: string;
}

export function TextParagraph({ children, marker, className }: Readonly<TextParagraphProps>) {
  return (
    <p className={cn(styles.TextParagraph, className)}>
      {marker && <span>&bull;</span>}
      <span>{children}</span>
    </p>
  );
}
