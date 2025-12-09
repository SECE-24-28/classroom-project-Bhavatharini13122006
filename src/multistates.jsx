// import {useState} from "react"
 
// const Display5 = () => {
// const [name,setName]=useState("bhava")
// const [gender,setGender]=useState("female")
// const [contact,setContact]=useState("1234567890")

// return(
//  <>
// <h1>{name}</h1>
// <h1>{gender}</h1>
// <h1>{contact}</h1>
//  </>

// )
// }
// export default Display5
import {useState} from "react"
 
const Multistates = () => {
const [stu,setStu]=useState({
    name:"bhavaaa",
    gender:"female",
    contact:1234567890
})
function updateName(){
    setStu({...stu,name:"thar"})
}
function updateGender(){
    setStu({...stu, gender:"male"})
}
function updateContact(){
    setStu({...stu, contact:9876543210})
}
return(
 <>
<h1>{stu.name}</h1>
<h1>{stu.gender}</h1>
<h1>{stu.contact}</h1>
<button onClick={updateName}>Change Name</button>
<button onClick={updateGender}>Change Gender</button>
<button onClick={updateContact}>Change Contact</button>
 </>
)
}
export default Multistates