import {useParams, useSearchParams } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Searchbar from "./components/Searchbar"
import Filter from "./components/Filter"
import { useEffect, useState } from "react"
import fetchCars from "./utils/fetchCars"
import { CarType } from "./types"
import Warning from "./components/Warning"
import Card from "./components/Card"
import LoadMore from "./components/Modal/LoadMore"
import { fuels, years } from "./utils/constants"


const App = () => {
  const [params]=useSearchParams()
  
  const [cars,setCars]=useState<CarType[] | null>(null);
  const [isError,setIsError]=useState<boolean>(false);
  const [limit,setLimit]=useState<number>(5)
  useEffect(()=>{
    const paramsObj=Object.fromEntries(params.entries());
fetchCars({limit,...paramsObj})
.then((data)=>setCars(data))
.catch(()=>setIsError(true))
  },[limit,params])

  return (
   
   <div className="bg-[rgb(23,23,23)] text-white min-h-screen">
 <Header/>
 <Hero/>
 <div className="mt-12 padding-x padding-y max-width">
  <div className="home__text-container">
    <h1 className="text-4xl font-extrabold ">Araba Kataloğu</h1>
    <p>Beğenebileceğin arabaları keşfet</p>
    </div>
  <div className="home__filters">
    <Searchbar/>
    <div className="home__filter-container">
      <Filter options={fuels} name="fuel_type"/>
    <Filter options={years} name="year"/>
    </div>
  </div>
   {/*Araçları listeleme*/ }
   {!cars ? (
   <Warning>Yükleniyor...</Warning>
 ): isError ? (
 <Warning>Üzgünüz bir hata oluştu..</Warning>
 ): cars.length <1 ? (
  <Warning>Aranılan kriterlere uygun bir araç bulunamadı...</Warning>
 ):(
 cars.length >1 && (
  <section>
    <div className="home__cars-wrapper">
      {cars.map((car,i)=>(
        <Card car={car} key={i}/>
      ))}
     
    </div>
    <LoadMore limit={limit}
    handleClick={()=>{
      setLimit(limit+5)}}/> 
  </section>
 // <div className="my-20 flex justify-center">
  //<h2 className="font-semibold">Veriler..</h2>
 //</div>
 )
)}
 </div>
</div>
  )
}

export default App