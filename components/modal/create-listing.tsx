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

enum STEPS{
    LOCATION = 1,
    CATEGORY=2,
    DETAILS=3,
    PRICE=4
}

const CreateListing = () => {
  const { isOpen, onClose } = useCreateListingModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-gray-200 p-5 w-full overflow-hidden">
        <DialogHeader className=" pt-4 ">
          <DialogTitle className=" font-bold font-sans text-xl">
            Welcome user, let us create our listing
         </DialogTitle>
          <DialogDescription>
            Let us create our first listing and let us go through the steps Let
            us create our first listing and let us go through the steps Let us
            create our first listing and let us go through the steps
          </DialogDescription>
        </DialogHeader>
        <div className=" w-full flex flex-col ">
            <form>

            </form>
        </div>
        <DialogFooter>
           
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListing;
