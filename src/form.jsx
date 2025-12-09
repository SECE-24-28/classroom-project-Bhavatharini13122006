import { useState } from "react";
const Form = () =>{
const [name, setName] = useState("")

function info(e){
    e.preventDefault()
    console.log("my name is: ",name)
    console.log("Form submitted")
}

return(
    <>
    <h1>FORM</h1>
    <form onSubmit={info}> 
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <input type="submit" value="Click here!!!!"/>
    </form>
    </> 
)
}

export default Form