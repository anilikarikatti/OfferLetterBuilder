
export default function  Inputs(props){

    let {values,setValues,name,placeholder,} = props;
    // let placeholder = "asdd0";
    // let name ="usename"
    
    let valuesChange = (e)=>{
        setValues({...values,[e.target.name] : e.target.value});
    }
    return (
        <>
            <div className="flex flex-col relative top-20 w-80">
                <label htmlFor="" className="relative  top-2 capitalize">{name}</label>
                <input type="text" className = "border-2 top-4 relative  border-black  rounded-lg px-2   h-10" placeholder={placeholder} onChange={valuesChange} name={name}></input>
                    

            </div>
        </>
    )
}