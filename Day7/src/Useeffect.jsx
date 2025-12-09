import {useState,useEffect} from "react"

const Useeffect=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("The count is:",count)
    },[count])
    return(
        <>
        <h1> I am from Display4</h1>
        <h2> The count is: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}> Increment </button>
        <button onClick={()=>{setCount(count-1)}}> Decrement </button>
        </>
    )
}
export default Useeffect