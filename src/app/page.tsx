"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const pauseDuration = 2000; // pause at end in milliseconds
    let isPaused = false;
    let animationFrameId: number;
    let pauseTimeoutId: NodeJS.Timeout;
    let resumeTimeoutId: NodeJS.Timeout;

    const autoScroll = () => {
      if (isPaused || isHovered) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;

      scrollPosition += scrollSpeed;

      // Reset to start when reaching the end
      if (scrollPosition >= scrollWidth - clientWidth) {
        isPaused = true;
        pauseTimeoutId = setTimeout(() => {
          scrollPosition = 0;
          carousel.scrollLeft = 0; // Instant reset instead of smooth
          resumeTimeoutId = setTimeout(() => {
            isPaused = false;
          }, 500);
        }, pauseDuration);
      } else {
        carousel.scrollLeft = scrollPosition; // Direct property assignment is faster
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(pauseTimeoutId);
      clearTimeout(resumeTimeoutId);
    };
  }, [isHovered]);

  return (
    <div className="py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
        Ady Mehta
      </h1>
      <p className="mb-4">Hello! I&apos;m Ady.</p>
      <p className="mb-4">
        This year, I&apos;ll be doing AI Journalism. I&apos;m an incoming{" "}
        <a
          className="hyperlink"
          href="https://www.tarbellcenter.org/fellowship"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tarbell Fellow
        </a>
        .
      </p>
      <p className="mb-4">
        Previously, I conducted research on AI Automation, AI Dividend Funds,
        and AI Wellbeing. Most recently, I designed IDs for Agents.
      </p>
      <p className="mb-4">
        Hearing from you will always make my day. You can always reach out on
        Signal (
        <a
          className="hyperlink"
          href="https://signal.me/#u/adymehta.74"
          target="_blank"
          rel="noopener noreferrer"
        >
          @adymehta.74
        </a>
        ) anytime.
      </p>
      {/* Photo Carousel */}
      <div className="mt-4 sm:mt-6">
        <div
          className="carousel-container"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel-track">
            <div className="carousel-item">
              <Image
                src="/assets/IMG_0215.JPG"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_0221.jpg"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_7242 2.JPG"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/EC323105-67A7-46ED-9EE8-8C67CEB8D541.JPG"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_6420.jpg"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_5154_3.jpg"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_1342.jpg"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_9470.jpg"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_7048.JPG"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/IMG_0018.JPG"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/39509321-B543-4E8E-94FE-C725698F8722 2.JPG"
                alt="Personal photo"
                className="carousel-image"
                width={400}
                height={300}
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
