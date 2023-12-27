"use client";

import React from "react";
import { Button } from "../ui/button";
import useCreateListingModal from "@/hooks/use-create-listing";

const Navbar = () => {
  const { onOpen } = useCreateListingModal();

  return (
    <div className=" w-full p-4  border-b-[4px] border-gray-500 mb-3 bg-slate-200 rounded-md">
      <Button variant="outline" onClick={onOpen}>
        Open
      </Button>
    </div>
  );
};

export default Navbar;
