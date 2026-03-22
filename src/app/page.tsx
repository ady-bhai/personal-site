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
      <p>
        I&apos;m an undergrad at UC Berkeley. I stumble around in CS,
        Philosophy, Economics & law school classes, {" "}
        edging my major declaration. I&apos;m currently on{" "}
        <a
          className="hyperlink"
          href="https://adymehta.substack.com/p/heres-to-the-gaps"
          target="_blank"
          rel="noopener noreferrer"
        >
          leave
        </a>{" "}
        to sidequest. 
      </p>
      <br />
      <div className="space-y-3">
        <p>Currently:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Building Agent ID Proof of Concepts for Singapore</li>
          <li>Introducing an AI Dividend Fund bill to California</li>
        </ul>
        <p>
          I find the most fulfillment from connecting with people. I&apos;m a
          field-builder at heart.
        </p>
      </div>
      <br />
      <p>
        My retirement dream is to be a kindergarten teacher. If you&apos;re up
        to play spikeball, watch the sunset or learn guitar together,{" "}
        <span className="italic">hearing from you would make my day.</span>
      </p>

      {/* Photo Carousel */}
      <div className="mt-8 sm:mt-12">
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
