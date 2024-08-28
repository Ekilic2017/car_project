//higher order components(hoc)
type Props={
    children:string;
}
const Warning = ({children}:Props) => {
  return (
    <div>{children}</div>
  )
}

export default Warning