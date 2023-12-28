"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import useCreateListingModal from "@/hooks/use-create-listing";

const CreateListing = () => {
  const { isOpen, onClose } = useCreateListingModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-gray-200 p-5 w-full overflow-hidden">
        <DialogHeader className=" pt-4 ">
          <DialogTitle>Welcome user, let us create our listing</DialogTitle>
          <DialogDescription>
            Let us create our first listing and let us go through the steps Let
            us create our first listing and let us go through the steps Let us
            create our first listing and let us go through the steps
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
           
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListing;
