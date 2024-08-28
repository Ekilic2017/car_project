import { FormEvent, useMemo, useState } from "react"
import ReactSelect from "react-select"
import { makes } from "../utils/constants"
import { useSearchParams } from "react-router-dom"
const Button=({desings}:{desings?:string})=>{
  return <button className={`ml-3 ${desings}`}>
    <img src="/search.svg" width={40} height={40} alt="" />
  </button>
}
const Searchbar = () => {
  const[params,setParams]=useSearchParams()
 const [make,setMake]=useState<string>(params.get("make") as string);
 const [model,setModel]=useState<string>(params.get("model") as string);
 // sayyfa render olduğunda gereksiz hesaplama yapmayacak
 const options=useMemo(
  ()=>makes.map((make)=>({label:make ,value:make})),[])
  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();
    //url'i güncelleme
    setParams({make:make.toLowerCase(),model:model.toLowerCase()})
  
  }
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
       <div className="searchbar__item">
        <ReactSelect 
        className="w-full text-black"
        placeholder="marka seçiniz"
        options={options}
        onChange={(selected)=>selected && setMake(selected.value)}
        defaultValue={{
          label:params.get("make") as string,
          value:params.get("make") as string,
        }}
         />
       </div>
       <Button/>
       <div  className="searchbar__item">
        <img width={25} className="absolute ml-4"src="model-icon.png"  alt="" />
        <input className="searchbar__input rounded text-black" 
        placeholder="Örn:BMW"
        type="text" 
        onChange={(e)=>setModel(e.target.value)}
        value={model}/>
        <Button />
       </div>
    </form>
  )
}

export default Searchbar