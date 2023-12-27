
import { create } from "zustand"

interface createListingModalStore{
   isOpen:boolean,
   onOpen:()=>void,
   onClose:()=>void
}


const useCreateListingModal =  create<createListingModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useCreateListingModal