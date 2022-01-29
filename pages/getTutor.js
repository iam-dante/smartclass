import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { FindSvg } from '../public/svg'


export default function GerTutor(){
    var category = [
        {id:1, name:"Academic"},
        {id:2, name:"Business"},
        {id:3, name:"Exam Preparation"},
        {id:4, name:"IT"},
        {id:5, name:"Language"},
        {id:6, name:"Music"},
        {id:7, name:"Elemenary and kindergarten"},
      ]
      
      var subject = [
        {id:1, name:"Early Childhood Education"},
        {id:2, name:"Elementary Mathematics"},
        {id:3, name:"Literacy and Numeracy"},
        {id:4, name:"Reading and Writing"},
      ]
      
      var level = [
        {id:1, name:"Beginner"},
        {id:2, name:"Intermediate"},
        {id:3, name:"Senoir"},
        {id:4, name:"Advance"},
      ]
    
      const [statecategory, setCategory] = useState(category[0])
      const [statesubject, setSubject] = useState(subject[0])
      const [statelevel, setLevel] = useState(level[0])
        
    return(
        <div>
            <div className="h-screen bg-cyanblue-200">
                <div className="relative flex justify-center items-center">
                    <h1 className="absolute left-8 top-8 md:left-16 text-3xl">SmartClass</h1>
                    <div className=" hidden lg:h-24  lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-14">
                    <h1>Home</h1>
                    <h1>Get tour</h1>
                    <h1>Packages</h1>
                    <h1>Blog</h1>
                    <h1>About us</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                <div className=" flex justify-center items-center">
                    <FindSvg/>
                </div>
                <div className="pt-12">
                    <div className=" w-[500px] rounded-xl drop-shadow bg-[#F8F8F8] px-12 py-12">

                <div className=" relative flex flex-col space-y-4 ">
                    <Listbox value={statecategory} onChange={setCategory}>
                    <Listbox.Label className=" font-medium text-lg">Category :</Listbox.Label>
                    <Listbox.Button className=" h-12 flex items-center px-4 border-2 border-cyanblue-300 rounded-md">{statecategory.name}</Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                    <Listbox.Options className=" absolute w-full rounded-md px-2 py-2 space-y-1 drop-shadow-lg border-2 border-cyanblue-100 bg-slate-100 z-20">
                        {category.map((ct) => (
                        <Listbox.Option
                            key={ct.id}
                            value={ct}
                            // disabled={p.unavailable}
                            className="hover:bg-cyanblue-300 px-2 py-2 rounded-md"
                        >
                            {ct.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                    </Listbox>


                    <Listbox value={statesubject} onChange={setSubject}>
                    <Listbox.Label className=" font-medium text-lg">Subject :</Listbox.Label>
                    <Listbox.Button className=" h-12 flex items-center px-4 border-2 border-cyanblue-300 rounded-md">{statesubject.name}</Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                    <Listbox.Options className=" absolute w-full rounded-md px-2 py-2 space-y-1 drop-shadow-lg border-2 border-cyanblue-100 bg-slate-100 z-10">
                        {subject.map((ct) => (
                        <Listbox.Option
                            key={ct.id}
                            value={ct}
                            // disabled={p.unavailable}
                            className="hover:bg-blue-200 px-2 py-2 rounded-md"
                        >
                            {ct.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                    </Listbox>


                    <Listbox value={statelevel} onChange={setLevel}>
                    <Listbox.Label className=" font-medium text-lg">Level :</Listbox.Label>
                    <Listbox.Button className=" h-12 flex items-center px-4 border-2 border-cyanblue-300 rounded-md">{statelevel.name}</Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                    <Listbox.Options className=" absolute w-full rounded-md px-2 py-2 space-y-1 drop-shadow-lg border-2 border-cyanblue-100 bg-slate-100 z-10">
                        {level.map((ct) => (
                        <Listbox.Option
                            key={ct.id}
                            value={ct}
                            // disabled={p.unavailable}
                            className="hover:bg-cyanblue-300 px-2 py-2 rounded-md"
                        >
                            {ct.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                    </Listbox>

                    <Listbox value={statelevel} onChange={setLevel}>
                    <Listbox.Label className=" font-medium text-lg">Tuition :</Listbox.Label>
                    <Listbox.Button className=" h-12 flex items-center px-4 border-2 border-cyanblue-300 rounded-md">{statelevel.name}</Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                    <Listbox.Options className=" absolute w-full rounded-md px-2 py-2 space-y-1 drop-shadow-lg border-2 border-cyanblue-100 bg-slate-100 z-10">
                        {level.map((ct) => (
                        <Listbox.Option
                            key={ct.id}
                            value={ct}
                            // disabled={p.unavailable}
                            className="hover:bg-cyanblue-300 px-2 py-2 rounded-md"
                        >
                            {ct.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                    </Listbox>

                    <h className="text-slate-400">Optional</h>
                    <label>Number of student</label>
                    <input className="h-12 px-4" placeholder="Number of students"/>
                    <div className="flex justify-end">
                    <span className="px-12 py-4  bg-[#D9F6FF]  text-[#005D7A] rounded-sm font-medium">Find Tutor</span> 
                    </div>
                </div>
                    </div>
                </div>
                </div>

            </div>

            <div className="h-[500px] bg-white flex justify-center items-center flex-col space-y-4">
                <h className="text-5xl font-medium text-center w-[840px]">Earn extra income on your free time by teaching people around you</h>
                <span className="px-6 py-4 bg-cyanblue-200 text-lg rounded-md text-cyan-600">Become a tutor</span>
            </div>
        </div>
)
}

