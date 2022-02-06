import Link from "next/link";
import Image from "next/image";

import {
  SearchSvg,
  MessageSvg,
  BookingSvg,
  LearningSvg,
} from "../components/svg";
import NavigationBar from "../components/navigationBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="mx-auto bg-slate-100">
        <NavigationBar />

        <div className="grid-rows- grid lg:grid-cols-2">
          <div className="z-20 space-y-6 py-12 pl-6 md:space-y-12 md:pl-20 lg:mt-24">
            <h1 className="mt-6  w-3 font-serif text-5xl md:w-9 xl:text-9xl">
              Education Reimagined
            </h1>
            <p className="text-1xl w-[300px] leading-loose md:text-2xl lg:w-[511px]">
              Find a class for your personal enrichment or to build your
              profesional opportunities
            </p>
            <div className="space-x-8">
              <Link href="/getTutor">
                <a className="bg-cyanblue-300 rounded-sm px-5 py-5 text-sm font-medium text-white md:text-lg lg:px-10 lg:py-5">
                  Get Started
                </a>
              </Link>

              <Link href="/">
                <a className="bg-cyanblue-200 text-cyanblue-400 rounded-sm px-5 py-5  text-sm font-medium md:text-lg lg:px-10 lg:py-5">
                  Be a tutor
                </a>
              </Link>
            </div>
          </div>

          <div className="flex justify-end lg:mt-24">
            <img
              src="./images/home.jpg"
              alt=""
              className="right-0 grayscale lg:h-[700px]"
            />
          </div>
        </div>
      </div>

      <div className="space-y-10 p-6 md:p-20">
        <div className="flex flex-col items-center justify-center lg:space-y-10">
          <h1 className="font-serif text-xl uppercase text-slate-800 md:text-3xl">
            About us
          </h1>
          <p className="text-center text-base leading-loose  lg:w-[914px] lg:text-2xl">
            SmartClass is the leading leader in online education rendering
            personalized learning experiences to lots of students and business
            professionals in infinite subjects in Africa. SmartClass is an
            online platform that connects learners/students to very qualified
            and certified private tutors/experts both online and offline.
            SmartClass does this by capitalizing on big data analytics and using
            advanced algorithmic matching between students and tutors.
          </p>
        </div>
        <div className="px-20">
          <h1 className="flex justify-center  font-serif text-xl uppercase text-slate-800 md:text-3xl">
            Our Sponsors
          </h1>
          <div className="flex justify-around space-x-3">
            <img
              src="/images/commonwealth.jpeg"
              className=" h-16 grayscale hover:grayscale-0 lg:h-48"
            />
            <img
              src="/images/tonyfoundation.png"
              className=" h-16 grayscale hover:grayscale-0 lg:h-48"
            />
            <img
              src="/images/udsm.png"
              className=" h-16 grayscale hover:grayscale-0 lg:h-48"
            />
          </div>
        </div>
      </div>

      <div className="bg-cyanblue-100 hidden space-y-24 p-20 xl:block ">
        <h1 className="flex justify-center font-serif text-3xl uppercase text-slate-800">
          How it works
        </h1>

        <div className="flex  h-72 flex-row">
          <div className="flex h-full  w-3/4 items-center justify-center pl-24">
            <div className="space-y-8">
              <div className="flex flex-row items-center  space-x-3">
                <span className="bg-cyanblue-300 px-4 py-4 text-xl text-white">
                  1
                </span>
                <h1 className="text-5xl">It all begins with a search</h1>
              </div>
              <p className="w-3/4 text-xl leading-loose">
                Simply enter your subject, level, teaching type and your
                location to view a tailored list of the best tutors in your
                area. Each tutor has a full profile, which is vetted before they
                are set live on the site, so you can confidently select the
                right tutor for you! If the initial tutor can&apos;t help, we
                will help you to find an alternative tutor who meets all of your
                needs.
              </p>
            </div>
          </div>
          <div className="flex h-full  w-1/4  items-center">
            <SearchSvg />
          </div>
        </div>

        <div className="flex  h-72 flex-row ">
          <div className="flex h-full  w-1/4 items-center justify-center pl-24 ">
            <MessageSvg />
          </div>
          <div className="flex h-full  w-3/4  items-center justify-center ">
            <div className=" w-2/3 rounded-xl bg-white px-12 py-12 drop-shadow-2xl">
              <div>
                <div className="flex flex-row items-center space-x-4">
                  <span className="bg-cyanblue-200 px-4 py-4 text-lg ">2</span>
                  <h1 className="text-4xl">Send a Message to your tutor</h1>
                </div>
                <p className=" text-xl leading-loose">
                  After selecting your tutor, you can message them for free. Our
                  messaging system means that you can chat with tutor through
                  SmartClass. Agree with the tutor, when and where the session
                  should take place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  h-72 flex-row">
          <div className="flex h-full  w-3/4 items-center justify-center pl-24">
            <div className="space-y-8">
              <div className="flex flex-row items-center  space-x-3">
                <span className="bg-cyanblue-300 px-4 py-4 text-xl text-white">
                  3
                </span>
                <h1 className="text-5xl">Session Booking and Payment</h1>
              </div>
              <p className="w-3/4 text-xl leading-loose ">
                Once you are happy with your tutor, a tutor will book the lesson
                for you and you will be asked to confirm the schedule by
                depositing the amount indicated in your invoice. Booking your
                private tutor is very easy in SmartClass, try it and see.
              </p>
            </div>
          </div>
          <div className="flex h-full  w-1/4  items-center">
            <BookingSvg />
          </div>
        </div>

        <div className="flex  h-72 flex-row ">
          <div className="flex h-full  w-1/4 items-center justify-center pl-24 ">
            <LearningSvg />
          </div>
          <div className="flex h-full  w-3/4  items-center justify-center ">
            <div className=" w-2/3 rounded-xl bg-white px-12 py-12 drop-shadow-2xl">
              <div>
                <div className="flex flex-row items-center space-x-4">
                  <span className="bg-cyanblue-200 px-4 py-4 text-lg ">4</span>
                  <h1 className="text-4xl">
                    Start learning and Rate your tutor
                  </h1>
                </div>
                <p className=" text-xl leading-loose">
                  Upon confirming the schedule, your tutor will prepare an
                  individualized learning plan to help you reach your goals.
                  Every lesson will be tailored to your needs. Research
                  demonstrates that, a one-to-one tuition leads to an additional
                  five months&apos; progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moblile */}
      <div className="bg-cyanblue-100 space-y-6 px-6 py-6 md:px-14 xl:hidden">
        <h1 className="flex justify-center font-serif text-2xl uppercase text-slate-800">
          How it works
        </h1>

        <div className="space-y-5">
          <div className="flex flex-row items-center  space-x-3">
            <span className="bg-cyanblue-300 px-4 py-4 text-xl font-semibold text-white">
              1
            </span>
            <h1 className="text-xl font-bold">It all begins with a search</h1>
          </div>
          <p className="text-base leading-loose">
            Simply enter your subject, level, teaching type and your location to
            view a tailored list of the best tutors in your area. Each tutor has
            a full profile, which is vetted before they are set live on the
            site, so you can confidently select the right tutor for you! If the
            initial tutor can&apos;t help, we will help you to find an
            alternative tutor who meets all of your needs.
          </p>
        </div>

        <div className="rounded-md bg-white px-4 py-6 drop-shadow-2xl">
          <div className="space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <span className="bg-cyanblue-200 px-4 py-4 text-lg font-semibold">
                2
              </span>
              <h1 className="text-xl font-bold">
                Send a Message to your tutor
              </h1>
            </div>
            <p className=" text-base leading-loose">
              After selecting your tutor, you can message them for free. Our
              messaging system means that you can chat with tutor through
              SmartClass. Agree with the tutor, when and where the session
              should take place.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-row items-center  space-x-3">
            <span className="bg-cyanblue-300 px-4 py-4 text-xl font-semibold text-white">
              3
            </span>
            <h1 className="text-xl font-bold">Session Booking and Payment</h1>
          </div>
          <p className="text-base leading-loose">
            Once you are happy with your tutor, a tutor will book the lesson for
            you and you will be asked to confirm the schedule by depositing the
            amount indicated in your invoice. Booking your private tutor is very
            easy in SmartClass, try it and see.
          </p>
        </div>

        <div
          className="round <a>Terms</a> <a>Privacy Policy</a>ed-md    bg-white
                            px-4 py-6 drop-shadow-2xl"
        >
          <div className="space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <span className="bg-cyanblue-200 px-4 py-4 text-lg font-semibold">
                4
              </span>
              <h1 className="text-xl font-bold">
                Start learning and Rate your tutor
              </h1>
            </div>
            <p className=" text-base leading-loose">
              Upon confirming the schedule, your tutor will prepare an
              individualized learning plan to help you reach your goals. Every
              lesson will be tailored to your needs. Research demonstrates that,
              a one-to-one tuition leads to an additional five months&apos;
              progress
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-6 py-20 md:px-20 lg:space-y-8">
        <h1 className="flex justify-center font-serif text-lg uppercase text-slate-800  lg:text-3xl">
          What our clients say
        </h1>

        <div className="scrollbar scrollbar-thin scrollbar-thumb-cyanblue-400 hidden snap-x snap-mandatory overflow-x-auto py-6 lg:block">
          <div className="flex w-fit flex-row space-x-20 px-96 ">
            <div className="inline-flex h-[290px] w-[900px] snap-center shadow-lg">
              <Image
                src="/images/MissBrooke.png"
                width={265}
                height={290}
                className="grayscale hover:grayscale-0"
              />
              <div className="flex h-full w-[563px] flex-col space-y-3 py-6 px-4">
                <h>
                  {" "}
                  I had an incredible experience with my tutor as well as
                  SmartClass. The tutor was well prepared, she comes on time and
                  my performance eventually increased for the first time ever
                  for the subject that I considered hard for me. I benefited a
                  lot from a very personalized and tailored one-one classes from
                  SmartClass. I hope you continue to touch the lives of many
                  students through the amazing service you provide.
                </h>
                <div className="flex flex-col space-y-2">
                  <h className="text-xl font-medium">Miss Brooke Tesfaye</h>
                  <h className="text-cyanblue-300 text-lg">Student</h>
                </div>
              </div>
            </div>

            <div className="inline-flex h-[290px] w-[900px] snap-center  shadow-lg">
              <Image
                src="/images/MissMunena.png"
                width={350}
                height={290}
                className="grayscale hover:grayscale-0"
              />
              <div className="flex h-full w-full flex-col space-y-3 py-6 px-4">
                <h>
                  I really love math. I love teaching math. In the past, I had
                  no way that I could teach math to students until when I heard
                  about the awesome SmartClass platform. I was so convinced from
                  the start about how impactful can SmartClass be because of the
                  power of personalised learning advantages. Now, despite being
                  a student at the University of Dar-es-Salaam, I am able to
                  help lots of students in math while at the same time growing
                  my income. I am so thrilled that at least I can share my math
                  skills with lots of other people. In one world I would say
                  SmartClass is AWESOME!!
                </h>
                <div className="flex flex-col space-y-2">
                  <h className="text-xl font-medium">Miss Maria Munena</h>
                  <h className="text-cyanblue-300 text-lg">Tutor</h>
                </div>
              </div>
            </div>

            <div className="inline-flex h-[290px] w-[900px] snap-center shadow-lg">
              <Image
                src="/images/KerstinJoseph.png"
                width={400}
                height={290}
                className="grayscale hover:grayscale-0"
              />
              <div className="flex h-full w-full flex-col space-y-3 py-6 px-4">
                <h>
                  I am third year student at the University of Dar-es-Salaam,
                  pursuing Bachelor of Science in Molecular Biology and
                  Biotechnology. In, my extra time I teach biology to secondary
                  students in nearby location. This is only possible because of
                  awesome SmartClass platform which gives me opportunity to
                  connect with hundreds of students. Through SmartClass I have
                  been able to substantially grow my income and at the same time
                  helping students succeed in their studies.{" "}
                </h>
                <div className="flex flex-col space-y-2">
                  <h className="text-xl font-medium">Kerstin Joseph</h>
                  <h className="text-cyanblue-300 text-lg">Tutor</h>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}

        <div className="scrollbar scrollbar-thin scrollbar-thumb-cyanblue-400 snap-x snap-mandatory overflow-x-auto py-6 lg:hidden">
          <div className="flex w-fit flex-row space-x-6">
            <div className="w-80 rounded-lg bg-zinc-500">
              <img
                src="/images/MissBrooke.png"
                className=" w-grayscale rounded-lg grayscale hover:grayscale-0"
              />
              <div className="px-4 py-4">
                <h className="text-base text-white ">
                  I had an incredible experience with my tutor as well as
                  SmartClass. The tutor was well prepared, she comes on time and
                  my performance eventually increased for the first time ever
                  for the subject that I considered hard for me. I benefited a
                  lot from a very personalized and tailored one-one classes from
                  SmartClass. I hope you continue to touch the lives of many
                  students through the amazing service you provide.
                </h>
                <div className="flex flex-col mt-5">
                  <h className="text-lg">Miss Maria Munena</h>
                  <h className="text-lg font-semibold text-gray-300">Student</h>
                </div>
              </div>
            </div>

            <div className="w-80 rounded-lg bg-zinc-500">
              <img
                src="/images/MissMunena.png"
                className="rounded-lg grayscale"
              />
              <div className="px-2 py-4">
                <h className="text-base text-white">
                  I really love math. I love teaching math. In the past, I had
                  no way that I could teach math to students until when I heard
                  about the awesome SmartClass platform. I was so convinced from
                  the start about how impactful can SmartClass be because of the
                  power of personalised learning advantages. Now, despite being
                  a student at the University of Dar-es-Salaam, I am able to
                  help lots of students in math while at the same time growing
                  my income. I am so thrilled that at least I can share my math
                  skills with lots of other people. In one world I would say
                  SmartClass is AWESOME!!
                </h>
                <div className="flex flex-col">
                  <h className="text-lg">Miss Maria Munena</h>
                  <h className="text-lg font-semibold text-gray-300">Tutor</h>
                </div>
              </div>
            </div>

            <div className="w-80 rounded-lg bg-zinc-500">
              <img
                src="/images/KerstinJoseph.png"
                className="rounded-lg grayscale"
              />
              <div className="px-2 py-4">
                <h className="text-base text-white">
                  I am third year student at the University of Dar-es-Salaam,
                  pursuing Bachelor of Science in Molecular Biology and
                  Biotechnology. In, my extra time I teach biology to secondary
                  students in nearby location. This is only possible because of
                  awesome SmartClass platform which gives me opportunity to
                  connect with hundreds of students. Through SmartClass I have
                  been able to substantially grow my income and at the same time
                  helping students succeed in their studies.
                </h>
                <div className="flex flex-col mt-5">
                  <h className="text-lg ">Kerstin Joseph</h>
                  <h className="text-lg font-semibold text-gray-300">Tutor</h>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div
          className="h-[600px] w-full bg-cover bg-fixed bg-center  bg-no-repeat backdrop-blur-lg "
          style={{ backgroundImage: "url('/images/news.jpeg')" }}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-6  bg-black px-6 opacity-70 backdrop-blur-sm">
            <h className="text-4xl text-white">Stay Updated</h>
            <h className="text-center  text-xl font-semibold text-white md:text-2xl">
              Get all the news, articles, promotions and many more straight into
              your inbox
            </h>
            <input
              className="focus:outline-cyanblue-300 h-12 rounded-md px-6 outline-none md:w-96"
              placeholder="Enter your email address"
            />
            <span className="bg-cyanblue-400 rounded-md px-12 py-4 text-white">
              Subscribe
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
