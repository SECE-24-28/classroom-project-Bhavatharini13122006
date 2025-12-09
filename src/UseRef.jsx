import {useState,useRef} from "react"
function UseRef(){
const[name,setName]=useState()
const input=useRef()
const view=()=>{
    console.log("The data is:",input.current.value)
    setName(input.current.value)
    input.current.value=""
}
    return(
        <>
        <h1> I am from Display3</h1>
        <input type="text" ref={input}></input>
        <button onClick={view}> View </button>
        <h2> The data is: {name}</h2>
        </>
    )

}

export default UseRef