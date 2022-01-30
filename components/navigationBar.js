import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from '@headlessui/react'




export default function NavigationBar(){
    const router = useRouter()
    return(
        <div className=" relative flex flex-row justify-center items-center py-8 lg:py-2 px-8 ">
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

            <div className="lg:hidden absolute right-8  h-12 w-12 bg-black "></div>
        </div>
    )
}