import { useState } from "react";

function Display1()
{
    // var name="demo";
    // console.log("i'm outside dispaly1 ",{name});
    // function changeName(d)
    // {
        
    //     console.log("i'm inside dispaly1 ",{d})
    // }

    const [myName,setMyName] = useState("hello")
    console.log("i'm inside the disp1",{myName})
    
    return (
        <>
            <h1>im from {myName}</h1>
            <button onClick={()=>{setMyName('not demo') }}>Click here!!!</button>
        </>
    )

}
export default Display1
