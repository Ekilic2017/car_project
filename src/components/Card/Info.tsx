import { motion } from "framer-motion";
import { CarType } from "../../types"
type Props={
    car:CarType
}
type FieldProps={
    img:string,
    text:string,
}
const Field=({img,text}:FieldProps)=>{
    return(
        <motion.div 
        initial={{
 translateY:"50px",
 opacity:0,
        }}
        whileInView={{
            translateY:0,
            opacity:1,
        }}
        className="relative flex-center flex-col">
            <img width={25} src={img}alt="" />
        <p>{text}</p>
        </motion.div>
    )
}
const Info = ({car}:Props) => {
    const transmission=car.transmission==="a"?"Otomotik":"Manuel";
    const drive=car.drive==="fwd"?"Önden Çeker":
    car.drive==="rwd" ? "Arkadan İtiş":"Dört Çeker";
    return (
    <div className="flex group-hover:hidden w-full justify-between">
        <Field img="/steering-wheel.svg" text={transmission}></Field>
        <Field img="/tire.svg" text={drive}></Field>
        <Field img="/gas.svg" text={car.fuel_type}></Field>
    </div>
  );
}

export default Info