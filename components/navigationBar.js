import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from '@headlessui/react'
import { MenuIcon } from "../public/svg";
import React, { Component } from "react";




export default function NavigationBar(){
    const router = useRouter()
    return(
        <div className=" relative flex flex-row justify-center items-center py-8 lg:py-2 px-8">
            <span className=" absolute left-8 text-2xl md:text-4xl place-self-center ">
                <h className="">Smart</h>
                <h className="font-serif text-cyanblue-300">Class</h>
            </span>

            <div className=" hidden h-12 lg:flex lg:flex-row lg:items-center  lg: lg:space-x-14 text-xl text-slate-500 bg-">
                <Link href="/" >
                    <a className= {router.pathname === "/" ? "font-semibold text-cyanblue-300 text-2xl": ""}>Home</a>
                </Link>

                <Link href="/getTutor">
                    <a className= {router.pathname === "/getTutor" ? "font-semibold text-cyanblue-300 text-2xl": ""}>Get Tutor</a>
                </Link>

                <Link href="/">
                    <a>Packages</a>
                </Link>

                <Link href="/blog">
                    <a className= {router.pathname === "/blog" ? "font-semibold text-cyanblue-300 text-2xl": ""}>Blog</a>
                </Link>

                <Link href="/">
                    <a>About Us</a>
                </Link>
            </div>

            <div className="lg:hidden absolute right-8 flex  justify-center items-center z-40">
                <Menu  as="div" className=" relative  z-400 inline-block ">
                    <Menu.Button>
                        <MenuIcon/>
                    </Menu.Button>
                        <Menu.Items className=" bg-slate-100  shadow-xl absolute right-0 px-4 py-4 flex flex-col w-60 rounded-md space-y-4">
                            <Menu.Item>
                                <Link href="/" >
                                    <a className= {router.pathname === "/" ? "font-semibold text-blue-400 text-lg bg-blue-200 px-4 rounded": ""}>Home</a>
                                </Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link href="/getTutor">
                                    <a className= {router.pathname === "/getTutor" ? "font-semibold text-blue-400 text-lg bg-blue-200 px-4 rounded": ""}>Get Tutor</a>
                                </Link>
                            </Menu.Item>

                            <Menu.Item>
                            <Link href="/">
                                <a>Packages</a>
                            </Link>
                            </Menu.Item>

                            <Menu.Item>
                            <Link href="/blog">
                                <a className= {router.pathname === "/blog" ? "font-semibold text-blue-400 text-lg bg-blue-200 px-4 rounded": ""}>Blog</a>
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
    )
}