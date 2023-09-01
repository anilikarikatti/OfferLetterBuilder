export default function Content({fullName,address,todayDate}){
//     let name = "anil";
//    let date = "april 10 2023"
//    let address = `
//    Shiva giri, Lingaraj Nagar,
//    Unkal Hubli-580021`
    return(
        <>
            <div className="content h-52 w-full top-20 relative">
                <div className="text-xl capitalize flex justify-center top-6 relative underline-offset-2 underline font-bold w-full">joining letter</div>

                {/* name */}
                <div className="flex h-80 relative top-20 w-full capitalize">
                    <div className="w-[70%]  relative left-40">
                        <div>SM/TC/SE013</div>
                        <div className="">Mr : {fullName}</div>
                        <div className="w-40 flex flex-wrap"> {address}</div>

                    </div>
                    <div>{todayDate}</div>

                </div>
            </div>
        </>
    )
}