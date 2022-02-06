import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { DropIcon, FindSvg } from "../components/svg";
import NavigationBar from "../components/navigationBar";
import Footer from "../components/Footer";

export default function GetTutor() {
  var category = [
    { id: 1, name: "Academic" },
    { id: 2, name: "Business" },
    { id: 3, name: "Exam Preparation" },
    { id: 4, name: "IT" },
    { id: 5, name: "Language" },
    { id: 6, name: "Music" },
    { id: 7, name: "Elemenary and kindergarten" },
  ];

  var subject = [
    { id: 1, name: "Early Childhood Education" },
    { id: 2, name: "Elementary Mathematics" },
    { id: 3, name: "Literacy and Numeracy" },
    { id: 4, name: "Reading and Writing" },
  ];

  var level = [
    { id: 1, name: "Beginner" },
    { id: 2, name: "Intermediate" },
    { id: 3, name: "Senoir" },
    { id: 4, name: "Advance" },
  ];

  const [statecategory, setCategory] = useState(category[0]);
  const [statesubject, setSubject] = useState(subject[0]);
  const [statelevel, setLevel] = useState(level[0]);

  return (
    <div>
      <div className="bg-cyanblue-100 h-screen">
        <NavigationBar />
        <div className="grid-row-1 lg:grid-row-none grid lg:grid-cols-2">
          <div className="hidden items-center justify-center lg:flex ">
            <FindSvg />
          </div>
          <div className="px-4 pt-12 md:px-12 ">
            <div className="rounded-xl bg-[#F8F8F8] px-5 py-6 drop-shadow md:px-12 md:py-12 lg:w-[500px]">
              <div className=" relative flex flex-col space-y-4 ">
                <Listbox value={statecategory} onChange={setCategory}>
                  <Listbox.Label className=" text-lg font-medium">
                    Category :
                  </Listbox.Label>
                  <Listbox.Button className="border-cyanblue-300 relative flex h-12 items-center rounded-md border-2 px-4">
                    {statecategory.name}
                    <DropIcon className="absolute right-4" />
                  </Listbox.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Listbox.Options className=" border-cyanblue-100 absolute z-20 w-full space-y-1 rounded-md border-2 bg-slate-100 px-2 py-2 drop-shadow-lg">
                      {category.map((ct) => (
                        <Listbox.Option
                          key={ct.id}
                          value={ct}
                          // disabled={p.unavailable}
                          className="rounded-md px-2 py-2 hover:bg-blue-200"
                        >
                          {ct.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>

                <Listbox value={statesubject} onChange={setSubject}>
                  <Listbox.Label className=" text-lg font-medium">
                    Subject :
                  </Listbox.Label>
                  <Listbox.Button className=" border-cyanblue-300 flex h-12 items-center rounded-md border-2 px-4">
                    {statesubject.name}
                    <DropIcon className="absolute right-4" />
                  </Listbox.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Listbox.Options className=" border-cyanblue-100 absolute z-10 w-full space-y-1 rounded-md border-2 bg-slate-100 px-2 py-2 drop-shadow-lg">
                      {subject.map((ct) => (
                        <Listbox.Option
                          key={ct.id}
                          value={ct}
                          // disabled={p.unavailable}
                          className="rounded-md px-2 py-2 hover:bg-blue-200"
                        >
                          {ct.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>

                <Listbox value={statelevel} onChange={setLevel}>
                  <Listbox.Label className=" text-lg font-medium">
                    Level :
                  </Listbox.Label>
                  <Listbox.Button className=" border-cyanblue-300 flex h-12 items-center rounded-md border-2 px-4">
                    {statelevel.name}
                    <DropIcon className="absolute right-4" />
                  </Listbox.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Listbox.Options className=" border-cyanblue-100 absolute z-10 w-full space-y-1 rounded-md border-2 bg-slate-100 px-2 py-2 drop-shadow-lg">
                      {level.map((ct) => (
                        <Listbox.Option
                          key={ct.id}
                          value={ct}
                          // disabled={p.unavailable}
                          className="rounded-md px-2 py-2 hover:bg-blue-200"
                        >
                          {ct.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>

                <Listbox value={statelevel} onChange={setLevel}>
                  <Listbox.Label className=" text-lg font-medium">
                    Tuition :
                  </Listbox.Label>
                  <Listbox.Button className=" border-cyanblue-300 flex h-12 items-center rounded-md border-2 px-4">
                    {statelevel.name}
                    <DropIcon className="absolute right-4" />
                  </Listbox.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Listbox.Options className=" border-cyanblue-100 absolute z-10 w-full space-y-1 rounded-md border-2 bg-slate-100 px-2 py-2 drop-shadow-lg">
                      {level.map((ct) => (
                        <Listbox.Option
                          key={ct.id}
                          value={ct}
                          // disabled={p.unavailable}
                          className="rounded-md px-2 py-2 hover:bg-blue-200"
                        >
                          {ct.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
                <div>
                  <label>Number of student</label>
                  <h className="ml-2 text-slate-400">Optional*</h>
                </div>
                <input
                  className="focus:outline-cyanblue-300 h-12 rounded-md px-4 outline-none"
                  placeholder="Number of students"
                />
                <div className="flex justify-end">
                  <span className="rounded-sm bg-[#D9F6FF]  px-12  py-4 font-medium text-[#005D7A]">
                    Find Tutor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex h-[400px] w-full items-center justify-center bg-cover  bg-fixed bg-center bg-no-repeat backdrop-blur-lg lg:h-[600px]"
        style={{ backgroundImage: "url('/images/teaching.jpg')" }}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center space-y-4 bg-black px-4 opacity-80 backdrop-blur-md backdrop-contrast-100">
          <h className="text-center text-xl font-medium text-white lg:w-[840px] lg:text-5xl">
            Earn extra income on your free time by teaching people around you
          </h>
          <span className="rounded-md bg-cyan-900 px-6 py-4 text-lg font-medium text-white">
            Become a tutor
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
