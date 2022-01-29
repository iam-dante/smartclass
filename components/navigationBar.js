import { useRouter } from "next/router";
import Link from "next/link";

export default function NavigationBar(){
    const router = useRouter()
    return(
        <div className="relative h-400 flex items-center justify-center">
            <span className="absolute left-16 md:left-16 text-4xl">
                <h className="">Smart</h>
                <h className="font-serif text-cyanblue-300">Class</h>
            </span>

            <div className=" hidden lg:h-24  lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-14 text-xl text-slate-500">
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
        </div>
    )
}