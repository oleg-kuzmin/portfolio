import cn from 'classnames';
import styles from './ButtonDownload.module.scss';

interface ButtonDownloadProps {
  className?: string;
}

export function ButtonDownload({ className }: Readonly<ButtonDownloadProps>) {
  return (
    <a className={cn(styles.ButtonDownload, className)} href="/portfolio/pdf/Олег-Кузьмин-Frontend.pdf" download>
      Резюме
    </a>
  );
}
