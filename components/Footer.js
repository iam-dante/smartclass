import { FaceBookIcon, InstagramIcon, LinkedIn, TwitterIcon, YoutubeIcon } from "./svg"

export default function Footer(){
    let list =["Get a tutor","Become a tutor","Jobs","Courses","Instant","Register","Careers","Competition"]

    return(
        <div>
            <div className="grid md:grid-cols-4 grid-rows-3  md:grid-rows-none md:pt-20 py-5 md:pl-10 px-6 gap-7">
                        <div className="flex flex-col space-y-7">
                            <span className=" text-4xl ">
                                <h className="">Smart</h>
                                <h className="font-serif text-cyanblue-300">Class</h>
                            </span>
                            <div className="flex flex-col space-y-4">
                                <h className="text-2xl md:text-3xl  font-semibold">Love what we do?</h>
                                <h className=" lg:w-[400px] text-lg md:text-xl  leading-loose">Do you appreciate what we do and would like to be part of this winning team? </h>
                                <h className="text-base">Just drop us an email and we&apos;ll get in touch with you.</h>
                                <a href = "mailto: investor@smartclass-tz.com" className="text-blue-600"> investor@smartclass-tz.com</a>
                                <h className="text-lg font-semibold">Follow Us</h>
                                <span className="flex flex-row space-x-5 items-center">

                                    <a href="https://www.instagram.com/smartclasstz/" target="_blank" rel="noreferrer">
                                        <InstagramIcon className="text-purple-500"/>
                                    </a>

                                    <a href="https://www.facebook.com/smartclasstz/" target="_blank" rel="noreferrer">
                                        <FaceBookIcon className="text-blue-500" />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCxfQRReMYNu2rGgk8B6VY_A" target="_blank" rel="noreferrer">
                                        <YoutubeIcon/>
                                    </a>

                                    <a href="https://www.linkedin.com/company/smartclasstz" target="_blank" rel="noreferrer">
                                        <TwitterIcon className="text-blue-500"/>
                                    </a>

                                    <a href="https://www.linkedin.com/company/smartclasstz" target="_blank" rel="noreferrer">
                                        <LinkedIn/>
                                    </a>
                                </span>
                            </div>
                        </div>

                    <div className="flex flex-col space-y-2 mt-12 md:mt-0 lg:pl-24 pl-0">
                        <h className="text-xl font-semibold">Quick Links</h>
                        {
                        list.map((vl)=>(
                            <h className="text-lg" key={vl}>{vl}</h>
                        ))
                        }
                    </div>
                    <div className="flex flex-col  space-y-1">
                        <h className="text-xl font-semibold">Contact</h>
                        <p className="w-56 text-lg leading-10">Physical location
                            University of Dar es Salaam.
                            UDBS Building, UDIEC Block,
                            Ground Floor, Room B213.
                            P. O. Box 36317,
                            Dar es Salaam,
                            Tanzania.</p>
                    </div>

                    <div className="flex flex-col -mt-24 md:-mt-0">
                        <h className="text-xl font-semibold">Info and Privacy</h>
                        <div className="space-y-2 flex flex-col mt-2">
                            <a>Terms</a>
                            <a>Privacy Policy</a>
                        </div>
                    </div>
                </div>

                    <div className="mt-4 py-10 border-t-2 border-b-gray-900 h-12 flex justify-center items-center text-slate-500 md:mx-20 mx-5 text-center text-sm md:text-base">
                        <h>SmartClass is a product of  SmartClass LLC. © Copyright 2022. All rights reserved.</h>
                    </div>
        </div>

    )
}