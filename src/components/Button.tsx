interface Props{
    title:string;
    desings?:string;
    disabled?:boolean;
  type?: "submit" |"reset" |"button";
  icon?:string;
  handleClick?:React.MouseEventHandler<HTMLButtonElement>;
} 
const Button = ({title,desings,disabled,type,icon,handleClick,}:Props) => {
  return (
    <button 
    onClick={handleClick}
    type={type}
    disabled={disabled}
    className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800
         text-white transition ${desings}`}>
         <span className="flex-1">{title}</span> 
         {icon&&<img className="w-6 h-6" src={icon}/>}
        </button>
  )
}

export default Button