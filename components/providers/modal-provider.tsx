"use client"
import React,{useState,useEffect} from 'react'
import CreateListing from '../modal/create-listing'
import{Category} from "@prisma/client"

interface ModalProviderProps{
    categories?:Category[]
}
const ModalProvider:React.FC<ModalProviderProps> = ({
    categories
}) => {

    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
  return (
  <>
   <CreateListing categories={categories}/>
  </>
  )
}

export default ModalProvider