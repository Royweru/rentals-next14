import React, { Children } from 'react'

import { 
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter

} from '../ui/dialog';

interface ModalProps{
    isOpen:boolean,
    title:String,
    desc:string
    onClose:()=>void,
    children:React.ReactNode
}
const Modal:React.FC<ModalProps> = ({
    isOpen,
    title,
    desc,
    onClose,
    children
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className=" bg-gray-200 p-5 w-full overflow-hidden">
      <DialogHeader className=" pt-4 ">
        <DialogTitle className=" font-bold font-sans text-xl">
         {title}
       </DialogTitle>
        <DialogDescription>
          {desc}
        </DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
);
  
}

export default Modal