"use client"
import React from 'react'

import { CarouselContent,CarouselItem,Carousel } from './ui/carousel'
import Image from 'next/image'
const Slider = () => {
  return (
    <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className=" w-full h-[350px]">
               <Image
                  fill
                  src={"/images/slide1.jpeg"}  
                  alt=""
                  className=" rounded" 
                  />              
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
  )
}

export default Slider