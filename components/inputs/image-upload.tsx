'use client'
import React from 'react'
import { CldUploadWidget }from 'next-cloudinary'
import { Button } from '../ui/button'
import { ImagePlus } from 'lucide-react'
import Image from 'next/image'
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
 <>
 {value&&(
    <div className=' w-full flex items-center'>
        {value.map((url,idx)=>(
               <div className=' relative w-[65px] h-[65px] rounded-lg' key={idx}>
               <Image
                fill 
                className='bg-cover'
                src={url}
                alt=''
                />
             </div>
        ))}
    </div>
 )}
    <CldUploadWidget uploadPreset='rwwki5ys' onUpload={onUpload} >
       {({open})=>{
        const onClick =()=>{
            open?.()
        }
        return(
            <Button variant="destructive" onClick={onClick} size="lg" disabled={disabled}>
                <ImagePlus className=' h-4 w-4 mr-2'/>
                Upload Image
            </Button>
        )
       }}
   </CldUploadWidget>
 </>


  )
}
