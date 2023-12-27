"use client"
import React,{useState,useEffect} from 'react'
import CreateListing from '../modal/create-listing'

const ModalProvider = () => {

    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
  return (
  <>
   <CreateListing />
  </>
  )
}

export default ModalProvider