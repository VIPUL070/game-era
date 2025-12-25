import { useRef, useState } from "react";

// TILT EFFECT
export function BentoTilt({ children, className = "" }) {
  const [transformStyle, setTransformStyle] = useState("");
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    if(!cardRef.current) return;
    
    const { left , top , width , height} = cardRef.current.getBoundingClientRect();

    //POSITION RELATIVE TO CURSOR
    const relativeX= (e.clientX - left) / width;
    const relativeY= (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95 , .95 , .95)`

    setTransformStyle(newTransform);
  }

  function handleMouseLeave() {
    setTransformStyle("");
  }

  return (
    <div
      className={className}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{transform : transformStyle}}
    >
      {children}
    </div>
  );
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      {/* 1. VIDEO */}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-9 top-0 size-full object-cover object-center"
      />

      {/* 2. TEXT */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>

          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
