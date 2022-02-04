import Link from "next/link"
import Footer from "../components/Footer"

import NavigationBar from "../components/navigationBar"
import { PhoneIcon, EmailIcon, EmailSendIcon, FaceBookIcon, TwitterIcon, InstagramIcon, LinkIcon } from "../components/svg"


export default  function Blog(){

    return(
        <div className="">
        <NavigationBar/>
        <div className="">

                <div className="grid md:grid-cols-8 grid-flow-row md:grid-rows-none ">
                    <div className="md:col-span-2  flex flex-col px-2 space-y-4  py-4">
                        

                            <iframe  className=" h-[300px] xl:h-[402px] md:w-[401px] rounded-lg" src="https://www.youtube.com/embed/1rtd9EIYO5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="md:w-[404px]  h-[170px] md:h-[228px] border-t-2 border-b-2 border-black flex justify-center items-center">
                                <div className="h-[145px] w-full md:w-[404px] bg-cyanblue-200 flex justify-center py-4 flex-col items-center space-y-4">
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
                            <div className="bg-cyanblue-200 h-[160px] md:w-[403px] flex justify-center items-center flex-col space-y-6">
                                <h className="font-semibold text-cyanblue-400 text-xl">Subscibe to newsletter</h>
                                <span className="h-[47px] md:w-[350px] px-4 space-x-4 flex justify-center items-center bg-white">
                                    <input className="h-[47px] md:w-[319px] px-4 outline-none" placeholder="Enter your email address"/>
                                    <EmailSendIcon/>
                                </span>
                            </div>
                        
                    </div>
                    <div className="md:col-span-6  ">

                        {
                            [1,2,3,4,5,6].map((vl)=>(

                        <div className=" px-6 py-6 space-y-4" key={vl}>
                            <div className="space-y-4">
                                <h1 className="text-2xl md:text-3xl font-semibold text-cyanblue-300">Scholarship for Form Four Students from Tanzania</h1>
                                <p className="lg:w-[615px] leading-loose text-base md:text-lg">Hi, UWC NC scholarship application is now open for those who have completed form four or its equivalent. ‘
                                    Apply here https://shorturl.at/foySXShare with your family and friends. Get help from best tutors on how to apply https://smartclasstz.com/view-tutor-profile/58/ernest-ma...
                                </p>
                            </div>
                            <div>
                                <h className="text-base">Salvatory Kessy</h>
                                <div className="border-t-2 border-black md:w-[600px] py-2 flex flex-row justify-between">
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
        <div className="bg-cyanblue-100">
            <Footer/>
        </div>
        </div>
    )
}