"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import useCreateListingModal from "@/hooks/use-create-listing";
import Modal from "./modal";

enum STEPS {
  LOCATION = 1,
  CATEGORY = 2,
  DETAILS = 3,
  PRICE = 4,
}

const CreateListing = () => {
  const [step, setStep] = useState(STEPS.LOCATION);
  
  const { isOpen, onClose } = useCreateListingModal();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create your own listing and manage it"
      desc="This is what it looks like this is what it looks like"
    >
      Here goes the body
    </Modal>
  );
};

export default CreateListing;
