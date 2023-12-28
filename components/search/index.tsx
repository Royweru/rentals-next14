import React from "react";
import { SearchInput } from "./search-input";
import { SearchButton } from "./search-button";

export const Search = () => {
  return (
    <div className=" w-full justify-between items-center flex flex-col p-5 h-[300px] bg-transparent">
      <div className=" w-full flex justify-between items-center gap-x-3 ">
       <SearchButton desc="Buy" />
       <SearchButton desc="Buy" />
       <SearchButton desc="Buy" />
      </div>
      <SearchInput />
    </div>
  );
};
