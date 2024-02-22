import React from 'react'
import slide1 from '../assets/Slide 1.png'
import slide2 from '../assets/Slide 2.png'
import slide3 from '../assets/Slide 3.png'
import slide4 from '../assets/Slide 4.png'
import { Carousel, IconButton } from "@material-tailwind/react";

const SlideCarousel = () => {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 bg-blue-gray-200 opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-blue-gray-200 opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={slide1}
        alt=""
        className="h-full w-full object-cover"
      />
      <img
        src={slide2}
        alt=""
        className="h-full w-full object-cover"
      />
      <img
        src={slide3}
        alt=""
        className="h-full w-full object-cover"
      />
      <img
        src={slide4}
        alt=""
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}

export default SlideCarousel
