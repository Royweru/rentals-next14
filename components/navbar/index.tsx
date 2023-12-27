"use client"

import React from 'react'
import { Button } from '../ui/button'
import useCreateListingModal from '@/hooks/use-create-listing'

const Navbar = () => {
    const {onOpen} =  useCreateListingModal()
  return (
    <div>
        <Button variant="outline" onClick={onOpen}>Open</Button>
    </div>
  )
}

export default Navbar