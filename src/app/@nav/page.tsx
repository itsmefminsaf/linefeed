"use client";

import Logo from "@/ui/components/Logo";
import Link from "next/link";
import { useState } from "react";
import { BiHeart, BiHome, BiMenu, BiQuestionMark, BiX } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import toggleTheme from "@/util/toggleTheme";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import toggleTheme from "@/util/toggleTheme";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <nav className="item-center flex justify-between border-b-4 p-3">
    <nav className="item-center flex justify-between border-b-4 p-3">
      <Logo />
      <button onClick={() => setNavOpen(!isNavOpen)}>
        {isNavOpen ? <BiX className="size-7" /> : <BiMenu className="size-7" />}
      </button>
      <ul
        className={`${isNavOpen ? "left-[0%]" : "left-[100%]"} fg fixed top-16 flex w-screen flex-col gap-3 p-[10%] duration-300`}
        className={`${isNavOpen ? "left-[0%]" : "left-[100%]"} fg fixed top-16 flex w-screen flex-col gap-3 p-[10%] duration-300`}
      >
        <button onClick={toggleTheme} className="self-end">
          <CiLight className="hidden size-7 dark:block" />
          <MdDarkMode className="block size-7 dark:hidden" />
        </button>
        <li className="nav-link">
          <BiHome />
          <Link href="/">Home</Link>
        </li>
        <li className="nav-link">
          <IoIosPeople />
          <Link href="/authors">Authors</Link>
        </li>
        <li className="nav-link">
          <BiHeart />
          <Link href="/genres">Genres</Link>
        </li>
        <li className="nav-link">
          <BiQuestionMark />
          <Link href="/about">About</Link>
        </li>
        <li className="nav-link">
          <IoPerson />
          <Link href="/profile">My Profile</Link>
        </li>
        <div className="flex items-center gap-3 py-2">
        <div className="flex items-center gap-3 py-2">
          <Link
            href="/auth/sign-in"
            className="border-light dark:border-dark rounded-full border-2 px-5 py-2"
          >
            Sign In
          </Link>
          <Link className="bg rounded-full px-5 py-2" href="/auth/sign-up">
          <Link className="bg rounded-full px-5 py-2" href="/auth/sign-up">
            Sign Up
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
