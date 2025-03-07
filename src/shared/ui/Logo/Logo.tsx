import cn from 'classnames';
import Image from 'next/image';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: Readonly<LogoProps>) {
  return (
    <div className={cn(styles.Logo, className)}>
      <Image className={styles.Logo__Image} src="/images/logo.png" alt="Логотип Frontend" width={40} height={40} />
      <span className={styles.Logo__Text}>Frontend</span>
    </div>
  );
}
