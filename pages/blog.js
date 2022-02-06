import Link from "next/link";
import Footer from "../components/Footer";

import NavigationBar from "../components/navigationBar";
import {
  PhoneIcon,
  EmailIcon,
  EmailSendIcon,
  FaceBookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkIcon,
} from "../components/svg";

export default function Blog() {
  return (
    <div className="">
      <NavigationBar />
      <div className="">
        <div className="grid grid-flow-row md:grid-cols-8 md:grid-rows-none ">
          <div className="flex  flex-col space-y-4 px-2 py-4  md:col-span-2">
            <iframe
              className=" h-[300px] rounded-lg md:w-[401px] xl:h-[402px]"
              src="https://www.youtube.com/embed/1rtd9EIYO5w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex  h-[170px] items-center justify-center border-t-2 border-b-2 border-black md:h-[228px] md:w-[404px]">
              <div className="flex h-[145px] w-full flex-col items-center justify-center space-y-4 bg-cyanblue-200 py-4 md:w-[404px]">
                <h className="text-xl font-semibold text-cyanblue-400">
                  Want to advertise here?
                </h>
                <div className="space-y-4 px-2">
                  <span className="flex flex-row space-x-4">
                    <PhoneIcon className="text-cyanblue-400" />
                    <h className="text-cyanblue-400 "> +255 752 156 253</h>
                  </span>

                  <span className="flex flex-row space-x-4">
                    <EmailIcon />
                    <h className="text-cyanblue-400"> info@smartclass-tz.com</h>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[160px] flex-col items-center justify-center space-y-6 bg-cyanblue-200 md:w-[403px]">
              <h className="text-xl font-semibold text-cyanblue-400">
                Subscibe to newsletter
              </h>
              <span className="flex h-[47px] items-center justify-center space-x-4 bg-white px-4 md:w-[350px]">
                <input
                  className="h-[47px] px-4 outline-none md:w-[319px]"
                  placeholder="Enter your email address"
                />
                <EmailSendIcon />
              </span>
            </div>
          </div>
          <div className="md:col-span-6  ">
            {[1, 2, 3, 4, 5, 6].map((vl) => (
              <div className=" space-y-4 px-6 py-6" key={vl}>
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold text-cyanblue-300 md:text-3xl">
                    Scholarship for Form Four Students from Tanzania
                  </h1>
                  <p className="text-base leading-loose md:text-lg lg:w-[615px]">
                    Hi, UWC NC scholarship application is now open for those who
                    have completed form four or its equivalent. ‘ Apply here
                    https://shorturl.at/foySXShare with your family and friends.
                    Get help from best tutors on how to apply
                    https://smartclasstz.com/view-tutor-profile/58/ernest-ma...
                  </p>
                </div>
                <div>
                  <h className="text-base">Salvatory Kessy</h>
                  <div className="flex flex-row justify-between border-t-2 border-black py-2 md:w-[600px]">
                    <h>JANUARY 27, 2022</h>
                    <span className="order-last flex  h-6 flex-row items-center justify-center space-x-2">
                      <FaceBookIcon />
                      <TwitterIcon />
                      <InstagramIcon />
                      <LinkIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-cyanblue-100">
        <Footer />
      </div>
    </div>
  );
}
