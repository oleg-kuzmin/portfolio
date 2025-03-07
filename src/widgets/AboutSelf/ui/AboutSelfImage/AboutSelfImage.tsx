import cn from 'classnames';
import Image from 'next/image';
import styles from './AboutSelfImage.module.scss';

interface AboutSelfImageProps {
  className?: string;
}

export function AboutSelfImage({ className }: Readonly<AboutSelfImageProps>) {
  return (
    <Image
      className={cn(styles.AboutSelfImage, className)}
      src="/svg/image-about.svg"
      alt="Молодой человек рассказывает о себе"
      width={0}
      height={0}
      sizes="100%"
      style={{ width: '100%', height: 'auto' }}
      priority={true}
    />
  );
}
