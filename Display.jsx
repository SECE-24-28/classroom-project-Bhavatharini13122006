function Display(datas) {
  const {name,a,arr,obj} = datas
    return (
    <>
      <h1>Hello {name} {a}</h1>
      <h1>Im from Display</h1>
      <ul>
        {
          arr.map((d)=>{
            return (
              <li>{d}</li>
            )
          })
        }
      </ul>
      <h2>{obj.name} {obj.age}</h2>
      <h3>i'm from diplay</h3>
    </>
  )
}

export default Display