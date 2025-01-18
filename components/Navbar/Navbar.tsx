import React from "react";
import { IoPersonOutline } from "react-icons/io5"; // Ionicons from React Icons
import { MdTravelExplore } from "react-icons/md";
import Link from "next/link";

function Navbar() {
  //test
  return (
    <div className="w-full fixed z-30">
      <div className="flex flex-row space-between items-center justify-between px-8 py-6 bg-beige-300 shadow-lg text-stone-500 rounded-b-md">
        <div className=" text-3xl text-stone-700 font-black">Music Diary</div>
        <div className="flex flex-row justify-center items-center space-between">
          <div className="mx-8 flex flex-row space-between items-center justify-between">
            <Link href="/" className="mx-4">
              Explore
            </Link>
            <Link href="/menu" className="mx-4">
              Today
            </Link>
          </div>
          <div className="mx-8 flex flex-row space-between items-center justify-between">
            <Link
              href="/profile"
              className="border-2 border-black rounded-full aspect-square flex items-center justify-center mx-2"
            >
              <IoPersonOutline size={20} color="black" className="m-1" />
            </Link>
            <Link
              href="/explore"
              className="mx-2 flex rounded-full bg-orange-700 px-4 py-2 justify-center text-stone-200 hover:text-stone-700 items-center border-2 border-orange-700 hover:bg-transparent transition-all ease-in-out duration-400"
            >
              <MdTravelExplore size={20} color="white" className="mr-2" />
              <div className="text-sm">Explore</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
