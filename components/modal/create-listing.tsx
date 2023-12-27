"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import useCreateListingModal from "@/hooks/use-create-listing";

const CreateListing = () => {
  const { isOpen, onClose } = useCreateListingModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-white p-0 w-full">
        <DialogHeader>
          <DialogTitle>Welcome user, let us create our listing</DialogTitle>
          <DialogDescription>
            Let us create our first listing and let us go through the steps Let
            us create our first listing and let us go through the steps Let us
            create our first listing and let us go through the steps
          </DialogDescription>
        </DialogHeader>
        <div>THis is the</div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListing;
