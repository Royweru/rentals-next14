"use client"
import React from 'react'

import { CarouselContent,CarouselItem,Carousel } from './ui/carousel'
import Image from 'next/image'
const Slider = () => {
  return (
    <Carousel>
        <CarouselContent>
          <CarouselItem>
            Hey there
          </CarouselItem>
        </CarouselContent>
      </Carousel>
  )
}

export default Slider