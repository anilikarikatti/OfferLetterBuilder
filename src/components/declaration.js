import Footer from "./footer"
export default function Declaration({fullName,JoiningDate,salary,designation,workingDays}){
    // let name = "anil";
    // let joiningDate = " 1st may 2023"
    return(
        <>
            <div className="relative left-40 top-32 leading-9 h-full" >
                <div className="capitalize">Dear {fullName}</div>

                <div className="w-[80%] h-20">
                    <p className="">On behalf of Samarth Meditech Pvt Ltd, I am pleased to offer you the position of
                    {designation}. In this visible position you will report to Mr. Chandan Purohit, CTO of
                    Samarth Meditech Pvt Ltd. Your start date will be {JoiningDate}.</p>
                </div>

                <div className=" w-[80%]">
                    Your compensation package includes the,

                    <div className="relative left-10 text-left">
                        <div className="flex">    
                            <p>
                                *
                            </p>
                           <p className="ml-4">Annual salary of {salary} laks per annum, which includes basic, Allowances and so on.</p>
                        </div>

                        <div className="flex">    
                            <p>
                                *
                            </p>
                            <p className="ml-4"> {workingDays} working days in the week.</p>

                        </div>


                            <div className="flex">    
                            <p>
                                *
                            </p>
                            <p className="ml-4"> And all the benefits as outlined in the Samarth MediTech benefits handbook.</p>
                        </div>

                           

                            <div className="flex">    
                            <p>
                                *
                            </p>
                            <p className="ml-4">You will be working for our own projects or our various partners, from the date of joining </p>
                        </div>

                            
                            
                            <div className="flex">    
                                <p>
                                    *
                                </p>
                                <p className="ml-4">Enclosed here with a specimen copy of medical Report which is to be filled in and
                                endorsed by Government Medical officer and same shall be submitted to us, also
                                please submit recently taken two photographs and Aadhaar card as soon as
                                possible.</p>
                            </div>

                           
                            <div className="flex">    
                            <p>
                                *
                            </p>
                            <p className="ml-4"> Please return duplicate copy of this letter and annexures signed by you token of
                            confirming your acceptance of the same within 15 days along with a copy of resignation
                            letter submitted to your previous employer or else the appointment order stands
                            cancelled automatically.</p>
                        </div>
                            
                        
                    </div>
                    <div className="relative top-10">
                    We welcome you to Samarth Meditech and looking forward for a long and mutually rewarding
                    association.

                    </div>
                    <div className="relative top-10">
                    For further details please reach us at hr@samarthmeditech.com or contact our HR department on
                    9620113333 we wait for your response.
                    </div>

                    <div className="relative top-20 ">
                    Shobha
                    </div>

                    <div className="relative top-32 h-80">
                        HR Executive

                    </div>
                </div>
                {/* <Footer/> */}

            </div>
        </>
    )
}