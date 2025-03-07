'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import 'swiper/css';
import { ProjectsData } from '@/shared/lib/types';
import { ButtonUI } from '../ButtonUI';
import { Modal } from '../Modal';
import { PreviewsList } from '../PreviewsList';
import { ProjectElement } from '../ProjectElement';
import { ButtonCounter } from './ButtonCounter';
import styles from './DesktopList.module.scss';

interface DesktopListProps {
  projectsData: ProjectsData;
  className?: string;
}

export function DesktopList({ projectsData, className }: Readonly<DesktopListProps>) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  const swiperConfig = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 56,
    allowTouchMove: false,
  };

  const handleClickPrev = () => {
    window.location.href = '#projects';
    swiperRef.current?.slidePrev();
  };

  const handleClickPreview = (index: number) => {
    window.location.href = '#projects';
    setIsActiveModal(false);
    swiperRef.current?.slideToLoop(index, 2000);
  };

  const handleClickNext = () => {
    window.location.href = '#projects';
    swiperRef.current?.slideNext();
  };

  const handleOpenModal = () => {
    setIsActiveModal(true);
  };

  const handleCloseModal = () => {
    setIsActiveModal(false);
  };

  const projectElements = projectsData.map(project => {
    return (
      <SwiperSlide key={project.title}>
        <ProjectElement project={project} media="desktop" />
      </SwiperSlide>
    );
  });

  return (
    <div className={cn(styles.DesktopList, className)}>
      <div className={styles.DesktopList__DecorateBgLeft}></div>
      <div className={styles.DesktopList__DecorateBgRight}></div>
      <div className={styles.DesktopList__SwiperButtons}>
        <ButtonUI icon="left" onClick={handleClickPrev} />
        <ButtonCounter activeSlide={activeSlide} length={projectsData.length} onClick={handleOpenModal} />
        <ButtonUI icon="right" onClick={handleClickNext} />
      </div>
      <Swiper
        {...swiperConfig}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        onSlideChange={swiper => {
          setActiveSlide(swiper.realIndex);
        }}
      >
        {projectElements}
      </Swiper>
      <Modal isActive={isActiveModal} onClose={handleCloseModal}>
        <PreviewsList projectsData={projectsData} onClose={handleCloseModal} onClickPreview={handleClickPreview} />
      </Modal>
    </div>
  );
}
