import React from "react";

interface SearchButtonProps {
  desc?: string;
}
export const SearchButton: React.FC<SearchButtonProps> = ({ desc }) => {
  return (
    <div className=" flex justify-center items-center w-1/3 h-[300px] bg-slate-50 hover:cursor-pointer hover:opacity-80">
      {desc}
    </div>
  );
};
