import React, { Children } from 'react'


interface HeroProps{
    children:React.ReactNode,
}
export const Hero:React.FC<HeroProps> = ({
    children
}) => {
  return (
    <div className=" w-full h-[500px] bg-[url('/images/bg3.webp')] bg-cover bg-center relative p-0">
        {children}
    </div>
  )
}
