import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  interval?: number;
  controls?: boolean;
  autoPlay?: boolean;
  width: number;
};

const Carousel = ({
  images,
  interval = 5000,
  controls = true,
  autoPlay = true,
  width,
}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | undefined>();

  const slide = (dir: boolean) => {
    let index;
    if (dir) {
      index = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
    } else {
      index = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    }
    startSlideTimer();
    setCurrentSlide(index);
  };

  const stopSlideTimer = useCallback(() => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  }, [autoPlay]);

  const startSlideTimer = useCallback(() => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < images.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  }, [autoPlay, images.length, interval, stopSlideTimer]);

  const switchIndex = (index: number) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, [startSlideTimer, stopSlideTimer]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden" style={{ maxWidth: width }}>
        <div
          className="whitespace-nowrap ease-in-out duration-300"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
          {images.map((img, i) => (
            <div
              key={img + i}
              className="inline-block w-full"
              onMouseEnter={stopSlideTimer}
              onMouseOut={startSlideTimer}>
              <Image
                className="mx-auto"
                src={img}
                alt="project_image"
                width={500}
                height={250}
              />
            </div>
          ))}
        </div>

        {controls && images.length > 1 && (
          <div>
            <button
              className="absolute top-[calc(50%-25px)] left-0 h-8 w-10 lg:h-12 lg:w-16 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
              onClick={(evt) => {
                slide(false);
              }}>
              {"<"}
            </button>
            <button
              className="absolute top-[calc(50%-25px)] right-0 h-8 w-10 lg:h-12 lg:w-16 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
              onClick={(evt) => {
                slide(true);
              }}>
              {">"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
