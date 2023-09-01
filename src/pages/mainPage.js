import Address from "@/components/address";
import Header from "@/components/header";
import Content from "@/components/ content";
import Declaration from "@/components/declaration";
import Footer from "@/components/footer";
import {useRouter} from "next/router";
import { useRef } from "react";

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
export default function MainPage(){

    let router = useRouter()
    let {fullName,JoiningDate,salary,address,todayDate,designation,workingDays} = router?.query;
    
    console.log(fullName);

    // pdf

    const printRef = useRef();

    let download = async()=>{
            const element = printRef.current;
            const canvas = await html2canvas(element);
            const data = canvas.toDataURL('image/png');

            const pdf = new jsPDF();
            const imgProperties = pdf.getImageProperties(data);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

            pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${fullName}.pdf`);
    }

    return(
        <>
            <div className=" min-h-screen min-w-screen  bg-white overflow-x-hidden overflow-y-hidden " >

                   <div ref={printRef}>
                   <Header></Header>          
                    <Address></Address>

                    <Content fullName={fullName} address={address} todayDate={todayDate}></Content>
                    <Declaration fullName={fullName} JoiningDate={JoiningDate} salary={salary} designation={designation} workingDays={workingDays}></Declaration>
                    <Footer/>

                   </div>
                    <div className="h-10 relative flex justify-center  top-[55%] gap-x-2">
                        <button name="submit" className="border-2 border-black w-40 rounded-lg  text-xl capitalize" onClick={download} >download</button>    
                        
                     </div>
            </div>
        </>
    )
}