import React from "react";

interface SearchButtonProps {
  desc?: string;
}
export const SearchButton: React.FC<SearchButtonProps> = ({ desc }) => {
  return (
    <div className=" rounded-md flex justify-center items-center
     w-1/3 h-[100px] bg-slate-50 hover:cursor-pointer hover:opacity-80">
      {desc}
    </div>
  );
};
