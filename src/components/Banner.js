import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src="/images/amazon-clone-slider-1.jpg"
            width={1500}
            height={600}
            alt="amazon"
          />
        </div>
        <div>
          <Image
            src="/images/amazon-clone-slider-2.jpg"
            width={1500}
            height={600}
            alt="amazon"
          />
        </div>
        <div>
          <Image
            src="/images/amazon-clone-slider-3.jpg"
            width={1500}
            height={600}
            alt="amazon"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
