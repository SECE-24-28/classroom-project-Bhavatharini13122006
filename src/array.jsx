import {useState} from "react"
const Array=()=>{
    const[arr,setArr]=useState([1])
const add=()=>
{
    setArr([...arr,arr.length+1])
    
}
return(
<>
<h1>Array Items</h1>
<ul>
{arr.map((item)=>(
    <li>{item}</li>
))
}
</ul>
<button onClick={add}>Add Element</button>
</>
)
}
export default Array