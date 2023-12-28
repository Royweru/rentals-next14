import React from "react";
import { SearchInput } from "./search-input";
import { SearchButton } from "./search-button";

export const Search = () => {
  return (
    <div className=" w-full justify-between items-center flex flex-col p-5 h-[200px] bg-transparent">
      <div className=" w-full flex items-center gap-x-3 justify-evenly ">
       <SearchButton desc="Buy" />
       <SearchButton desc="Rent" />
    
      </div>
      <SearchInput />
    </div>
  );
};
