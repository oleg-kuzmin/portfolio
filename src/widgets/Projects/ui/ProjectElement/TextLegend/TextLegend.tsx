import cn from 'classnames';
import styles from './TextLegend.module.scss';

interface TextLegendProps {
  children: React.ReactNode;
  className?: string;
}

export function TextLegend({ children, className }: Readonly<TextLegendProps>) {
  return <span className={cn(styles.TextLegend, className)}>{children}</span>;
}
