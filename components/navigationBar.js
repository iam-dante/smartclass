import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { MenuIcon } from "./svg";
import React, { Component } from "react";

export default function NavigationBar() {
  const router = useRouter();
  return (
    <div className=" relative flex flex-row items-center justify-center py-8 px-8 lg:py-2 ">
      <span className=" absolute left-8 place-self-center text-2xl md:text-4xl ">
        <h className="">Smart</h>
        <h className="text-cyanblue-300 font-serif">Class</h>
      </span>

      <div className=" lg: bg- hidden h-12 text-xl  text-slate-500 lg:flex lg:flex-row lg:items-center lg:space-x-14">
        <Link href="/">
          <a
            className={
              router.pathname === "/"
                ? "text-cyanblue-300 text-2xl font-semibold"
                : "hover:text-cyanblue-300 hover:text-2xl"
            }
          >
            Home
          </a>
        </Link>

        <Link href="/getTutor">
          <a
            className={
              router.pathname === "/getTutor"
                ? "text-cyanblue-300 text-2xl font-semibold"
                : "hover:text-cyanblue-300 hover:text-2xl"
            }
          >
            Get Tutor
          </a>
        </Link>

        <Link href="/">
          <a className="hover:text-cyanblue-300 hover:text-2xl">Packages</a>
        </Link>

        <Link href="/blog">
          <a
            className={
              router.pathname === "/blog"
                ? "text-cyanblue-300 text-2xl font-semibold"
                : "hover:text-cyanblue-300 hover:text-2xl"
            }
          >
            Blog
          </a>
        </Link>

        <Link href="/">
          <a className="hover:text-cyanblue-300 hover:text-2xl">About Us</a>
        </Link>
      </div>

      <div className="absolute right-8 z-40 flex  items-center justify-center lg:hidden">
        <Menu as="div" className=" z-400  relative inline-block ">
          <Menu.Button>
            <MenuIcon />
          </Menu.Button>
          <Menu.Items className=" absolute  right-0 flex w-80 flex-col space-y-4 rounded-md border-2 border-gray-300 bg-slate-100 px-4 py-4 shadow-2xl">
            <Menu.Item>
              <Link href="/">
                <a
                  className={
                    router.pathname === "/"
                      ? "rounded bg-blue-100 px-4 text-lg font-semibold text-cyan-700"
                      : ""
                  }
                >
                  Home
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/getTutor">
                <a
                  className={
                    router.pathname === "/getTutor"
                      ? "rounded bg-blue-100 px-4 text-lg font-semibold text-cyan-700"
                      : ""
                  }
                >
                  Get Tutor
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/">
                <a>Packages</a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/blog">
                <a
                  className={
                    router.pathname === "/blog"
                      ? "rounded bg-blue-100 px-4 text-lg  font-semibold text-cyan-700"
                      : ""
                  }
                >
                  Blog
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
