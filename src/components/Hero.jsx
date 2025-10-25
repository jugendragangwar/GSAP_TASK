import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import frameSprite from "../assets/rotating_frame.png";

gsap.registerPlugin(ScrollTrigger);

export default function FullScreenScrollHero() {
  const sectionRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Get scale value based on screen size
      const getScaleValue = () => {
        const width = window.innerWidth;
        if (width < 480) return 3.5;
        if (width < 640) return 4;
        if (width < 768) return 4.5;
        if (width < 1024) return 5.5;
        return 6.5;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(contentRef.current, {
              scale: getScaleValue(),
              duration: 2,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(contentRef.current, {
                  scale: 1,
                  duration: 2,
                  ease: "power2.in",
                });
              },
            });
          },
          onEnterBack: () => {
            gsap.to(contentRef.current, {
              scale: 1.2,
              duration: 2,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(contentRef.current, {
                  scale: 1,
                  duration: 2,
                  ease: "power2.in",
                });
              },
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div
        ref={contentRef}
        className="relative h-screen w-full overflow-hidden bg-black"
        style={{ transformOrigin: "center" }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain animate-frameLoop"
          style={{
            backgroundImage: `url(${frameSprite})`,
          }}
        >
          <div className="text">
            BizSettle
          </div>
        </div>
      </div>
    </section>
  );
}