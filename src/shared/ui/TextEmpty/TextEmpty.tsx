import cn from 'classnames';
import styles from './TextEmpty.module.scss';

interface TextEmptyProps {
  className?: string;
}

export function TextEmpty({ className }: Readonly<TextEmptyProps>) {
  return <p className={cn(styles.TextEmpty, className)}></p>;
}
