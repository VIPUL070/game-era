import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Collab = () => {
  const containerRef = useRef();

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=1000",
      scrub: 0.5, 
      pin: true,
    }
  });

  gsap.set("#cards", { perspective: 1000 });

   tl.to(".bento-item", {
    xPercent: 0,
    yPercent: 100,
    scale: 0.8,
    opacity: 0,
    ease: "power1.inOut"
  }, 0);

   tl.to(".bento-hero", {
    xPercent: 0,
    yPercent: 0,
    scale: 0.9,
    opacity: 1,
    ease: "power1.inOut"
  }, 0);


  tl.to(".bento-item-1", {
    xPercent: -100,
    yPercent: 0,
    rotateX : 45,
    opacity: 1,
    scaleY : 1,
    ease: "power1.inOut"
  }, 0);

  tl.to(".bento-item-2", {
    xPercent: 100,
    yPercent: 0,
    rotateX : 45,
    scaleY : 1,
    opacity: 1,
    ease: "power1.inOut"
  }, 0);

}, { scope: containerRef });

  return (
    <section id="collab" className="h-auto w-screen bg-black p-10">

      <div  ref={containerRef} className="relative h-screen text-blue-50 flex flex-col items-center justify-evenly mb-40">
        {/* TITLE */}
        <div className="relative z-20 sm:text-center special-font text-[6rem]">
          <p>
            Ze<b>n</b>try at a glan<b>c</b>e
          </p>
        </div>

        {/* CARDS */}
        <div id="cards" className="relative h-auto w-full flex gap-1 flex-wrap items-center justify-center">

          <div className="absolute top-10 left-120 z-1">
            <div className="bento-item-1">
              <img
                src="img/gallery-2.webp"
                className="object-cover card object-center"
              />
            </div>
          </div>

          <div className="relative z-10 h-[75vh] w-[30vw]">
            <div className="bento-hero">
              <img
                src="img/gallery-1.webp"
                className="object-cover object-center rounded-md bg-violet-300"
              />
            </div>
          </div>
          
          <div className="absolute z-5 bottom-10 left-80">
            <div className="bento-item">
              <img
                src="img/gallery-3.webp"
                className="object-cover card object-center"
              />
            </div>
          </div>

          <div className="absolute top-10 right-120 z-1">
            <div className="bento-item-2">
              <img
                src="img/gallery-4.webp"
                className="object-cover card object-center"
              />
            </div>
          </div>

          <div className="absolute z-5 bottom-10 right-80">
            <div className="bento-item">
              <img
                src="img/gallery-5.webp"
                className="object-cover card object-center"
              />
            </div>
          </div>

        </div>

        {/* PARAH */}
        <div className="bento-text relative w-200 text-center font-circular mt-40">
          <p>
            Join us in molding the Nova Universe! Engage in governance and make
            your voice heard as we collaboratively build a dynamic world limited
            only by our collective creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collab;
