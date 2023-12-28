import React from "react";
import { SearchInput } from "./search-input";

export const Search = () => {
  return (
    <div className=" w-full justify-between items-center flex flex-col p-5 h-[300px] bg-transparent">

      
      <div className=" flex justify-center items-center w-1/3 h-[300px] bg-slate-50">
        rent
      </div>
      <div className=" flex justify-center items-center w-1/3 h-[300px] bg-slate-50">
         morgage
      </div>
      <SearchInput />
    </div>
  );
};
