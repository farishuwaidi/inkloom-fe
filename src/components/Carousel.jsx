import React from 'react'
import slide1 from '../assets/Slide 1.png'
import slide2 from '../assets/Slide 2.png'
import slide3 from '../assets/Slide 3.png'
import slide4 from '../assets/Slide 4.png'
import { Carousel} from "@material-tailwind/react";

const SlideCarousel = () => {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
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
