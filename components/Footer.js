export default function Footer(){
    let list =["Get a tutor","Become a tutor","Jobs","Courses","Instant","Register","Careers","Competition"]

    return(
        <div>
        <div className="grid grid-cols-3 h-[500px] pt-20 pl-20">
                    <div className="flex flex-col space-y-4">
                        <h className="text-4xl">Smart Class </h>
                        <h className="text-3xl font-semibold">Love what we do?</h>
                        <h className="text-xl w-80 leading-loose">Do you appreciate what we do and would like to be part of this winning team? </h>
                        <h className="text-base">Just drop us an email and we&apos;ll get in touch with you.</h>
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