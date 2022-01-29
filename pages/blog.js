import Link from "next/link"
import { useRouter } from "next/router"

import NavigationBar from "../components/navigationBar"
import { PhoneIcon, EmailIcon, EmailSendIcon, FaceBookIcon, TwitterIcon, InstagramIcon, LinkIcon } from "../public/svg"


export default  function Blog(){
    const router = useRouter
    return(
        <div className="h-screen ">
            <NavigationBar/>

                <div className="grid grid-cols-8 h-96">
                    <div className="col-span-2  flex flex-col px-8 space-y-4  py-4">
                        {/* <div className="grid grid-rows-3">
                            <div className="bg-yellow-200 "></div>
                            <div className="bg-purple-200 "></div>
                            <div className="bg-red-200"></div>

                        </div> */}
                        
                            {/* <div className="bg-gray-200 h-[402px] w-[401px] rounded-xl"></div> */}

                            <iframe  className="h-[402px] w-[401px] rounded-lg" src="https://www.youtube.com/embed/1rtd9EIYO5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="w-[404px] h-[228px] border-t-2 border-b-2 border-black flex justify-center items-center">
                                <div className="h-[145px] w-[404px] bg-cyanblue-200 flex justify-center py-4 flex-col items-center space-y-4">
                                    <h className="text-xl font-semibold text-cyanblue-400">Want to advertise here?</h>
                                    <div className="px-2 space-y-4">
                                        <span className="flex flex-row space-x-4">
                                            <PhoneIcon className="text-cyanblue-400"/>
                                            <h className="text-cyanblue-400 "> +255 752 156 253</h>
                                        </span>

                                        <span className="flex flex-row space-x-4">
                                            <EmailIcon/>
                                            <h className="text-cyanblue-400">  info@smartclass-tz.com</h>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-cyanblue-200 h-[160px] w-[403px] flex justify-center items-center flex-col space-y-6">
                                <h className="font-semibold text-cyanblue-400 text-xl">Subscibe to newsletter</h>
                                <span className className="h-[47px] w-[350px] px-4 space-x-4 flex justify-center items-center bg-white">
                                    <input className="h-[47px] w-[319px] px-4 outline-none" placeholder="Enter your email address"/>
                                    <EmailSendIcon/>
                                </span>
                            </div>
                        
                    </div>
                    <div className="col-span-6  ">

                        {
                            [1,2,3,4,5,6].map((vl)=>(

                        <div className=" px-6 py-6 space-y-4" key={vl}>
                            <div className="space-y-4">
                                <h1 className="text-3xl font-semibold text-cyanblue-300">Scholarship for Form Four Students from Tanzania</h1>
                                <p className="w-[615px] leading-loose text-lg">Hi, UWC NC scholarship application is now open for those who have completed form four or its equivalent. ‘
                                    Apply here https://shorturl.at/foySXShare with your family and friends. Get help from best tutors on how to apply https://smartclasstz.com/view-tutor-profile/58/ernest-ma...
                                </p>
                            </div>
                            <div>
                                <h className="text-base">Salvatory Kessy</h>
                                <div className="border-t-2 border-black w-[600px] py-2 flex flex-row justify-between">
                                    <h>JANUARY 27, 2022</h>
                                    <span className="flex flex-row  h-6 items-center justify-center space-x-2 order-last">
                                        <FaceBookIcon/>
                                        <TwitterIcon/>
                                        <InstagramIcon/>
                                        <LinkIcon/>
                                    </span>
                                </div>
                            </div>
                        </div>
                            ))
                        }

                    </div>

                </div>

        </div>
    )
}