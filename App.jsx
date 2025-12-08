import Display from "./Display"
function App() {
    var name="rdemo";
    var val1=23;
    var arr=[12,23,34]
    const person = {name:"bhava",age:18}
    return (
    <>
      <h1>Welcome</h1>
      <Display name={name} a={val1} arr={arr} obj={person}/>
    </>
   
  )
}

export default App