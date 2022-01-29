import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Home from "./home"
import Blog from "./blog"

export default function App() {
  return (
  // <Blog/>
  <Home/>
  )
}





{/* <div className="grid grid-cols-4  px-20">
        <div className="col-span-3  space-y-4">
          <div className="flex flex-row items-center space-x-4">
            <span className="px-4 py-2 bg-cyanblue-300 text-xl text-white">1</span>
            <h1 className="text-4xl">It all begins with a search</h1>
          </div>
          <p className="w-3/4 text-lg">Simply enter your subject, level, teaching type and your location to view a tailored list of the best tutors in your area. Each tutor has a full profile, which is vetted before they are set live on the site, so you can confidently select the right tutor for you! If the initial tutor can’t help, we will help you to find an alternative tutor who meets all of your needs.</p>
        </div>
        <div className="">
          <SearchSvg/>
        </div>


        <div className="">
          <MessageSvg/>
        </div>

        <div className="col-span-3  space-y-3  flex justify-center items-center">
          <div className=" w-2/3 px-12 bg-white py-12 rounded-xl drop-shadow-2xl">
            <div>
              <div className="flex flex-row items-center space-x-4">
                <span className="px-4 py-4 bg-cyanblue-200 text-lg ">2</span>
                <h1 className="text-4xl">Send a Message to your tutor</h1>
              </div>
              <p className="w-3/4 text-lg">After selecting your tutor, you can message them for free. Our messaging system means that you can chat with tutor through SmartClass. Agree with the tutor, when and where the session should take place.</p>
            </div>
          </div>
        </div>

  
        <div className="col-span-3  space-y-3  flex justify-center items-center">
          <div >
            <div className="flex flex-row items-center space-x-4 ">
              <span className="px-4 py-4 bg-cyanblue-200 text-lg">3</span>
              <h1 className="text-4xl">Session Booking and Payment</h1>
            </div>
            <p className="w-3/6 text-lg">Once you are happy with your tutor, a tutor will book the lesson for you and you will be asked to confirm the schedule by depositing the amount indicated in your invoice. Booking your private tutor is very easy in SmartClass, try it and see.</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <BookingSvg/>
        </div>  
      </div> */}