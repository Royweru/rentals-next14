"use client";

import React from "react";
import { Button } from "../ui/button";
import useCreateListingModal from "@/hooks/use-create-listing";

const Navbar = () => {
  const { onOpen } = useCreateListingModal();

  return (
    <div className=" w-full p-4  border-b-[4px]  border-slate-100 mb-3 bg-transparent rounded-md">
      <Button variant="outline" onClick={onOpen}>
        Open
      </Button>
    </div>
  );
};

export default Navbar;
