import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { FindSvg } from '../public/svg'
import NavigationBar from '../components/navigationBar'
import Footer from '../components/Footer'


export default function GetTutor(){
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
            <div className="h-screen bg-cyanblue-100">
                <NavigationBar/>
                <div className="grid lg:grid-cols-2 grid-row-1 lg:grid-row-none">
                <div className="hidden lg:flex justify-center items-center ">
                    <FindSvg/>
                </div>
                <div className="pt-12 px-4 md:px-12 ">
                    <div className="lg:w-[500px] rounded-xl drop-shadow bg-[#F8F8F8] md:px-12 md:py-12 px-5 py-6">

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
                            className="hover:bg-blue-200 px-2 py-2 rounded-md"
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
                            className="hover:bg-blue-200 px-2 py-2 rounded-md"
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
                            className="hover:bg-blue-200 px-2 py-2 rounded-md"
                        >
                            {ct.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                    </Listbox>

                    <h className="text-slate-400">Optional</h>
                    <label>Number of student</label>
                    <input className="h-12 px-4 outline-none focus:outline-cyanblue-300 rounded-md" placeholder="Number of students"/>
                    <div className="flex justify-end">
                    <span className="px-12 py-4  bg-[#D9F6FF]  text-[#005D7A] rounded-sm font-medium">Find Tutor</span> 
                    </div>
                </div>
                    </div>
                </div>
                </div>

            </div>

            <div className="h-[300px] lg:h-[600px] w-full bg-fixed bg-cover bg-center  backdrop-blur-lg bg-no-repeat flex justify-center items-center" style={{backgroundImage: "url('/images/teaching.jpg')",}}>
                <div className=" flex justify-center items-center flex-col space-y-4 backdrop-blur-md backdrop-contrast-100 w-full h-full px-4 bg-black opacity-80">
                    <h className="text-2xl lg:text-5xl font-medium text-center lg:w-[840px] text-white">Earn extra income on your free time by teaching people around you</h>
                    <span className="px-6 py-4 bg-cyan-900 text-lg rounded-md text-white font-medium">Become a tutor</span>
                </div>
            </div>
            <Footer/>
        </div>
)
}

