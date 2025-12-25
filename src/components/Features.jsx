import { TiLocationArrow } from "react-icons/ti";
import BentoCard, { BentoTilt } from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        {/* 1. Text section */}
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="text-gray-500 max-w-md font-circular text-lg">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        {/* 2. BENTO GRID */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Radia<b>n</b>t
              </>
            }
            description=" A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure"
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 md:row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 md:row-span-1 md:col-span-1 me-32 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <div className="bento-tilt_2 col-span-1 row-span-1">
            <div className="size-full flex justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re Co<b>m</b>ing S<b>o</b>on
              </h1>
              <TiLocationArrow className="self-end scale-[5]" />
            </div>
          </div>

          <div className="bento-tilt_2 col-span-1 row-span-1">
            <video
              src="videos/feature-5.mp4"
              loop
              autoPlay
              muted
              className="object-cover object-center size-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
