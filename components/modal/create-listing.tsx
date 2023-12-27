import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'

const CreateListing = () => {
  return (
  <Dialog>
    <DialogContent className=' bg-white p-0 '>
        <DialogHeader>
              <h1 className=' font-bold text-xl'>
                What yo say
              </h1>
        </DialogHeader>
        <div>
            THis is the body
        </div>
    </DialogContent>
  </Dialog>
  )
}

export default CreateListing