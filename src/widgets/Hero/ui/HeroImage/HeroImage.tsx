import cn from 'classnames';
import Image from 'next/image';
import styles from './HeroImage.module.scss';

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className }: Readonly<HeroImageProps>) {
  return (
    <Image
      className={cn(styles.HeroImage, 'animate-light-speed-in-left', className)}
      src="/portfolio/svg/image-hero.svg"
      alt="Молодой человек за компьютером"
      width={0}
      height={0}
      sizes="100%"
      style={{ width: '100%', height: 'auto' }}
      priority={true}
    />
  );
}
