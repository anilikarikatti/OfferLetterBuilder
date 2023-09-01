export default function Address(){

    return ( 
        <div className="min-h-[20%] address-container w-full  bg-white relative top-20">
            <div className=" relative  flex flex-row  justify-center">
                <div className="h-40 sm:w-[50%] w-[30%] flex relative">
                    <div className="logo h-32 w-80"></div>
                    <div className="h-20 border border-red-600  top-8 relative left-6"></div>
                    
                </div>
                <div className="address relative top-2">
                    <div>Phone :  +91 96201-13333</div>
                    <div>Email : info@samarthmeditech.com</div>
                    <div>CIN No: U72900KA2020PTC135774.</div>
                    <div>STPI, IT Park, Deshpande Nagar, Hubli-29. </div>

                </div>
{/* 
                : +91 96201-13333
Email: info@samarthmeditech.com
CIN No: U72900KA2020PTC135774.
STPI, IT Park, Deshpande Nagar, Hubli-29. */}

            </div>
            <div className="h-[1px] bg-black left-20 relative"></div>
        </div>
    )
}