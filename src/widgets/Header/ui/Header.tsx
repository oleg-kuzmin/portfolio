'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Logo } from '@/shared/ui';
import { BurgerPanel } from './BurgerPanel';
import { ButtonBurger } from './ButtonBurger';
import { ButtonDownload } from './ButtonDownload';
import { Navigation } from './Navigation';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  const [isActiveBurgerPanel, setIsActiveBurgerPanel] = useState(false);

  const handleToggleBurgerPanel = () => {
    setIsActiveBurgerPanel(!isActiveBurgerPanel);
  };

  return (
    <header className={cn(styles.Header, className)}>
      <div className={styles.Header__Content}>
        <Logo />
        <ButtonBurger
          className={styles.Header__ButtonBurger}
          isActive={isActiveBurgerPanel}
          onClick={handleToggleBurgerPanel}
        />
        <BurgerPanel
          className={styles.Header__BurgerPanel}
          isActive={isActiveBurgerPanel}
          onClick={handleToggleBurgerPanel}
        />
        <Navigation className={styles.Header__Navigation} />
        <ButtonDownload className={styles.Header__ButtonDownload} />
      </div>
    </header>
  );
}
