import { useState } from "react"
import Router from "next/router";
import Inputs from "@/components/input";
export default function  InputsPage(){
    let [values,setValues] = useState({});

    // console.log(values);

    let submit = ()=>{
        Router.push({pathname: "/mainPage" , query:{...values}})
    }

    let reset = ()=>{
        setValues({});
    }
    return (
        <>
            <div className="h-screen w-screen bg-orange-300 overflow-y-scroll">

                <div className="flex justify-center  relative top-10">
                    <h2 className="text-2xl capitalize">samarth Meditech pvt ltd</h2>

                </div>

               <div className="flex justify-center">
                <div className="grid sm:grid-cols-2 justify-between  gap-10 items-center grid-wrap" >
                        <Inputs values={values} setValues={setValues} name="fullName" placeholder="Enter  full name "></Inputs>
                        <Inputs values={values} setValues={setValues} name="JoiningDate" placeholder="april 10 2023"></Inputs>
                       
                        <Inputs values={values} setValues={setValues} name="todayDate" placeholder="april 10 2023"></Inputs>


                        <Inputs values={values} setValues={setValues} name="salary" placeholder="Enter Package"></Inputs>

                        <Inputs values={values} setValues={setValues} name="address" placeholder="Enter address"></Inputs>

                        <Inputs values={values} setValues={setValues} name="designation" placeholder="Enter designation"></Inputs>
                        <Inputs values={values} setValues={setValues} name="workingDays" placeholder="no of working Days"></Inputs>
                        {/* <Inputs values={values} setValues={setValues} name="designation" placeholder="Enter designation"></Inputs> */}

                        {/* <Inputs values={values} setValues={setValues} name="salary" placeholder="Enter package"></Inputs> */}
                       

                       

                        
                    </div>


               
                    
               </div>

               <div className="h-10 relative flex justify-center  top-[25%] gap-x-2">
                        <button name="submit" className="border-2 border-black w-40 rounded-lg  text-xl capitalize" onClick={submit}>submit</button>    
                        <button name="reset" className="border-2 border-black w-40 rounded-lg  text-xl capitalize" onClick={reset}>reset</button>    

                     </div>

                {/* <Inputs></Inputs>
                <Inputs></Inputs>
                <Inputs></Inputs>
                <Inputs></Inputs> */}


            </div>
        </>
    )
}