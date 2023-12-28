"use client";

import React from "react";
import { Button } from "../ui/button";
import useCreateListingModal from "@/hooks/use-create-listing";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";

interface NavbarProps {
  user?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const { onOpen } = useCreateListingModal();
  const router = useRouter()
  return (
    <div className=" w-full p-4 bg-transparent rounded-md">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.jpg"
              className="h-8 rounded-full"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blocks
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:flex md:w-auto  justify-between items-center"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Rent
                    </a>
                  </li>
                </DropdownMenuTrigger>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Buy
                    </a>
                  </li>
                </DropdownMenuTrigger>
              </DropdownMenu>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
            {!user && (
              <div className=" flex justify-between gap-x-2 items-center ml-4 ">
                <Button variant="destructive" onClick={()=>router.push('/sign-in')} >
                 Sign In
                </Button>
                <Button variant="outline" onClick={()=>router.push('/sign-up')} >
                 Sign Up
                </Button>
              </div>
            )}
            {user && (
              <div className=" flex justify-between items-center ml-4 gap-x-4">
                <UserButton afterSignOutUrl="/" />
                <Button onClick={onOpen} variant="outline">
                  Create Listing 
                  <PlusCircle className=" h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
