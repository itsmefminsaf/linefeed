"use client";

import Logo from "@/ui/components/Logo";
import Link from "next/link";
import { useState } from "react";
import { BiHeart, BiHome, BiMenu, BiQuestionMark, BiX } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <nav className="bord-dark item-center flex justify-between border-b-4 p-3">
      <Logo />
      <button onClick={() => setNavOpen(!isNavOpen)}>
        {isNavOpen ? <BiX className="size-7" /> : <BiMenu className="size-7" />}
      </button>
      <ul
        className={`${isNavOpen ? "left-[0%]" : "left-[100%]"} dark fixed top-16 flex w-screen flex-col gap-3 py-5 pl-[10%] duration-300`}
      >
        <li className="flex items-center gap-2 text-lg font-bold">
          <BiHome />
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center gap-2 text-lg font-bold">
          <IoIosPeople />
          <Link href="/authors">Authors</Link>
        </li>
        <li className="flex items-center gap-2 text-lg font-bold">
          <BiHeart />
          <Link href="/genres">Genres</Link>
        </li>
        <li className="flex items-center gap-2 text-lg font-bold">
          <BiQuestionMark />
          <Link href="/about">About</Link>
        </li>
        <li className="flex items-center gap-2 text-lg font-bold">
          <IoPerson />
          <Link href="/profile">My Profile</Link>
        </li>
        <div className="border-t-dark flex items-center gap-3 py-2">
          <Link
            href="/auth/sign-in"
            className="bord-light rounded-full border-2 px-5 py-2"
          >
            Sign In
          </Link>
          <Link className="light rounded-full px-5 py-2" href="/auth/sign-up">
            Sign Up
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
