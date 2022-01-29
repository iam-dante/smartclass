import Link from "next/link"

import {SearchSvg, MessageSvg, BookingSvg, LearningSvg }from "../public/svg"
import NavigationBar from "../components/navigationBar"


export default function Home(){
    let list =["Get a tutor","Become a tutor","Jobs","Courses","Instant","Register","Careers","Competition"]
    
    return(
        <div>
            <div className="h-screen mx-auto">

                <NavigationBar/>

                <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2">
                <div className="pl-6 md:pl-20 space-y-12">
                    <h1 className="mt-24 md:mt-48 text-5xl xl:text-9xl w-3 md:w-9 font-serif">Education Reimagined</h1>
                    <p className="w-3/4 lg:w-[511px] text-1xl md:text-2xl leading-loose">Find a class for your personal enrichment or to build your profesional opportunities</p>
                    <div className="space-x-8">
                        <Link href="/getTutor">
                            <a className="px-10 py-5 text-sm md:text-lg bg-cyanblue-300 text-white font-medium rounded-sm">Get Started</a>
                        </Link>

                        <Link href="/">
                            <a className=" px-10 py-5 text-sm  md:text-lg bg-cyanblue-200 text-cyanblue-400 font-medium rounded-sm">Be a tutor</a>
                        </Link>
                    </div>
                </div>

                <div className="mt-28 lg:mt-24 ">
                    <img src='./images/home.jpg' alt=""  className="h-full w-full right-0 grayscale" />
                </div>
                </div>
            </div>

                <div className="p-6 md:p-20 space-y-10">
                    <div className="space-y-10  flex justify-center flex-col items-center  h-80">
                        <h1 className="text-xl md:text-3xl font-serif uppercase text-slate-500 ">About us</h1>
                        <p className="text-xl lg:text-2xl w-[914px] flex justify-center text-center leading-loose">SmartClass is the leading leader in online education rendering personalized learning experiences to lots of students and business professionals in infinite subjects in Africa. SmartClass is an online platform that connects learners/students to very qualified and certified private tutors/experts both online and offline. SmartClass does this by capitalizing on big data analytics and using advanced algorithmic matching between students and tutors.</p>
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl  font-serif uppercase flex justify-center">Our Sponsors</h1>
                        <div className="  flex justify-around ">
                        <img src="/images/commonwealth.jpeg" className="grayscale hover:grayscale-0 h-48"/>
                        <img src="/images/tonyfoundation.png" className="grayscale hover:grayscale-0"/>
                        <img src="/images/udsm.png" className="grayscale hover:grayscale-0"/>
                        </div>
                    </div>   
                </div>

                <div className="bg-cyanblue-100 p-20 space-y-24 ">
                <h1 className="flex justify-center text-3xl font-serif uppercase">How it works</h1>

                

                <div className="h-72  flex flex-row">
                    <div className="w-3/4 h-full  flex justify-center items-center pl-24">
                    <div className="space-y-8">
                        <div className="flex flex-row items-center  space-x-3">
                        <span className="px-4 py-4 bg-cyanblue-300 text-xl text-white">1</span>
                        <h1 className="text-5xl">It all begins with a search</h1>
                        </div>
                        <p className="w-3/4 text-xl leading-loose">Simply enter your subject, level, teaching type and your location to view a tailored list of the best tutors in your area. Each tutor has a full profile, which is vetted before they are set live on the site, so you can confidently select the right tutor for you! If the initial tutor can’t help, we will help you to find an alternative tutor who meets all of your needs.</p>
                    </div>
                    </div>
                    <div className="w-1/4 h-full  flex  items-center">
                    <SearchSvg/>
                    </div>
                </div>

                <div className="h-72  flex flex-row ">
                    <div className="w-1/4 h-full  flex justify-center items-center pl-24 ">
                    <MessageSvg/>
                    </div>
                    <div className="w-3/4 h-full  flex  items-center justify-center ">
                    <div className=" w-2/3 px-12 bg-white py-12 rounded-xl drop-shadow-2xl">
                        <div>
                        <div className="flex flex-row items-center space-x-4">
                            <span className="px-4 py-4 bg-cyanblue-200 text-lg ">2</span>
                            <h1 className="text-4xl">Send a Message to your tutor</h1>
                        </div>
                        <p className=" text-xl leading-loose">After selecting your tutor, you can message them for free. Our messaging system means that you can chat with tutor through SmartClass. Agree with the tutor, when and where the session should take place.</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="h-72  flex flex-row">
                    <div className="w-3/4 h-full  flex justify-center items-center pl-24">
                    <div className="space-y-8">
                        <div className="flex flex-row items-center  space-x-3">
                        <span className="px-4 py-4 bg-cyanblue-300 text-xl text-white">3</span>
                        <h1 className="text-5xl">Session Booking and Payment</h1>
                        </div>
                        <p className="w-3/4 text-xl leading-loose ">Once you are happy with your tutor, a tutor will book the lesson for you and you will be asked to confirm the schedule by depositing the amount indicated in your invoice. Booking your private tutor is very easy in SmartClass, try it and see.</p>
                    </div>
                    </div>
                    <div className="w-1/4 h-full  flex  items-center">
                    <BookingSvg/>
                    </div>
                </div>


                <div className="h-72  flex flex-row ">
                    <div className="w-1/4 h-full  flex justify-center items-center pl-24 ">
                    <LearningSvg/>
                    </div>
                    <div className="w-3/4 h-full  flex  items-center justify-center ">
                    <div className=" w-2/3 px-12 bg-white py-12 rounded-xl drop-shadow-2xl">
                        <div>
                        <div className="flex flex-row items-center space-x-4">
                            <span className="px-4 py-4 bg-cyanblue-200 text-lg ">4</span>
                            <h1 className="text-4xl">Start learning and Rate your tutor</h1>
                        </div>
                        <p className=" text-xl leading-loose">Upon confirming the schedule, your tutor will prepare an individualized learning plan to help you reach your goals. Every lesson will be tailored to your needs. Research demonstrates that, a one-to-one tuition leads to an additional five months’ progress.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="px-20 py-20 space-y-8 "> 
                <h1 className="text-4xl flex justify-center uppercase font-serif ">What our clients say</h1>

                <div className="overflow-x-auto scrollbar scrollbar-thin">

                    <div className="bg-blue-500 flex flex-row space-x-11 w-fit">
                    <div className="w-[900px] rounded-xl flex justify-center items-center px-12 py-12  flex-col space-y-2 shadow-lg bg-cyanblue-300">
                        <img src="/images/MissBrooke.png" alt="" className="h-32 w-32 items-center rounded-full grayscale"/>
                        <p className="text-center  text-lg text-white "> I had an incredible experience with my tutor as well as SmartClass. The tutor was well prepared, she comes on time and my performance eventually increased for the first time ever for the subject that I considered hard for me. I benefited a lot from a very personalized and tailored one-one classes from SmartClass. I hope you continue to touch the lives of many students through the amazing service you provide.</p>
                        <h className="font-medium  text-xl">Miss Brooke Tesfaye</h>
                        <h className="text-white text-base font-semibold">Student</h>
                    </div>

                    <div className=" w-[900px]  rounded-xl flex justify-center items-center px-12 py-12  flex-col space-y-2 shadow-lg bg-cyanblue-300">
                        <img src="/images/MissBrooke.png" alt="" className="h-32 w-32 items-center rounded-full grayscale"/>
                        <p className="text-center  text-lg "> I had an incredible experience with my tutor as well as SmartClass. The tutor was well prepared, she comes on time and my performance eventually increased for the first time ever for the subject that I considered hard for me. I benefited a lot from a very personalized and tailored one-one classes from SmartClass. I hope you continue to touch the lives of many students through the amazing service you provide.</p>
                        <h className="font-medium  text-xl text-white ">Miss Brooke Tesfaye</h>
                        <h className="text-cyanblue-400 text-base font-semibold">Student</h>
                    </div>

                    <div className=" w-[900px]  rounded-xl flex justify-center items-center px-12 py-12  flex-col space-y-2 shadow-lg bg-cyanblue-300">
                        <img src="/images/MissBrooke.png" alt="" className="h-32 w-32 items-center rounded-full grayscale"/>
                        <p className="text-center  text-lg "> I had an incredible experience with my tutor as well as SmartClass. The tutor was well prepared, she comes on time and my performance eventually increased for the first time ever for the subject that I considered hard for me. I benefited a lot from a very personalized and tailored one-one classes from SmartClass. I hope you continue to touch the lives of many students through the amazing service you provide.</p>
                        <h className="font-medium  text-xl text-white ">Miss Brooke Tesfaye</h>
                        <h className="text-cyanblue-400 text-base font-semibold">Student</h>
                    </div>

                    <div className=" w-[900px]  rounded-xl flex justify-center items-center px-12 py-12  flex-col space-y-2 shadow-lg bg-cyanblue-300">
                        <img src="/images/MissBrooke.png" alt="" className="h-32 w-32 items-center rounded-full grayscale"/>
                        <p className="text-center  text-lg "> I had an incredible experience with my tutor as well as SmartClass. The tutor was well prepared, she comes on time and my performance eventually increased for the first time ever for the subject that I considered hard for me. I benefited a lot from a very personalized and tailored one-one classes from SmartClass. I hope you continue to touch the lives of many students through the amazing service you provide.</p>
                        <h className="font-medium  text-xl text-white ">Miss Brooke Tesfaye</h>
                        <h className="text-cyanblue-400 text-base font-semibold">Student</h>
                    </div>
                    </div>
                </div>
                </div>

                <div className=" w-full">
                {/* <img  className="h-3/4 w-full bg-cover bg-center opacity-70 bg-no-repeat" style={{backgroundImage: "url('/images/news.jpeg')"}}/> */}
                <div className="h-[600px] w-full bg-cover bg-center bg-opacity-9 space-y-6 bg-black bg-no-repeat flex justify-center items-center flex-col" style={{backgroundImage: "url('/images/news.jpeg')"}}>
                    <h className="text-4xl text-white">Stay Updated</h>
                    <h className="text-white text-2xl font-semibold">Get all the news, articles, promotions and many more straight into your inbox</h>
                    <input className="h-12 w-96 px-6 rounded-md" placeholder="Enter your email address"/>
                    <span className="bg-cyanblue-400 text-white px-12 py-4 rounded-md">Subscribe</span>
                </div>
                </div>

                <div className="grid grid-cols-3 h-[500px] pt-20 pl-20">
                <div className="flex flex-col space-y-4">
                    <h className="text-4xl">Smart Class </h>
                    <h className="text-3xl font-semibold">Love what we do?</h>
                    <h className="text-xl w-80 leading-loose">Do you appreciate what we do and would like to be part of this winning team? </h>
                    <h className="text-base">Just drop us an email and we'll get in touch with you.</h>
                    <h>investor@smartclass-tz.com</h>
                </div>

                <div className="flex flex-col space-y-4 ">
                    <h className="text-xl font-semibold">Quick Links</h>
                    {
                    list.map((vl)=>(
                        <h className="text-lg" key={vl}>{vl}</h>
                    ))
                    }
                </div>

                <div className="flex flex-col  space-y-4">
                    <h className="text-xl font-semibold">Contact</h>
                <p className="w-56 text-lg leading-loose">Physical location
                    University of Dar es Salaam.
                    UDBS Building, UDIEC Block,
                    Ground Floor, Room B213.
                    P. O. Box 36317,
                    Dar es Salaam,
                    Tanzania.</p>
                </div>
                </div>

                <div className="border-t-2 border-b-gray-900 h-24 flex justify-center items-center text-slate-500 mx-20">
                <h>SmartClass is a product of  SmartClass LLC. © Copyright 2022. All rights reserved.</h>
                </div>
        </div>
)
}