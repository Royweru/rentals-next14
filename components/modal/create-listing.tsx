"use client"
import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import useCreateListingModal from '@/hooks/use-create-listing'

const CreateListing = () => {
    const {isOpen,onClose} = useCreateListingModal()
  return (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className=' bg-white p-0 w-full'>
        <DialogHeader>
              <h1 className=' font-bold text-xl'>
                What yo say
              </h1>
        </DialogHeader>
        <div>
            THis is the
        </div>
    </DialogContent>
  </Dialog>
  )
}

export default CreateListing