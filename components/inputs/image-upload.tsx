'use client'
import React from 'react'
import { CldUploadWidget }from 'next-cloudinary'
import { Button } from '../ui/button'
import { ImagePlus } from 'lucide-react'

interface ImageUploadProps{
    onChange:(url:string)=>void,
    onRemove:(url:string)=>void,
    disabled:boolean,
    value?:string[]
}
export const ImageUpload:React.FC<ImageUploadProps> = ({
    onChange,
    onRemove,
    disabled,
    value
}) => {


    const onUpload = (result:any)=>{
       onChange(result.secure_info.url)
    }
  
  return (


   <CldUploadWidget uploadPreset='rwwki5ys' onUpload={onUpload} >
       {({open})=>{
        const onClick =()=>{
            open()
        }
        return(
            <Button variant="destructive" onClick={onClick} size="lg">
                <ImagePlus className=' h-4 w-4 mr-2'/>
                Upload Image
            </Button>
        )
       }}
   </CldUploadWidget>
  )
}
