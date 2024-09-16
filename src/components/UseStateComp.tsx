import { useState } from "react"

// type useStateCompProps = {
//     UseStateCompObj:{
//     count:number,
//     setCount:React.Dispatch<React.SetStateAction<number>>
//     name:string,
//     setName:React.Dispatch<React.SetStateAction<string>>
//     INITIAL_COUNT:number
//     INITIAL_NAME:string
// }
// }


const UseStateComp= () =>{
    const INITIAL_COUNT = 0
    const [count,setCount]= useState<number>(INITIAL_COUNT)
    const INITIAL_NAME = "JAVASCRIPT"
    const [name,setName]= useState<string>(INITIAL_NAME)
    const handleIncrement=()=>{
        setCount((prevCount)=> prevCount + 1)
    }
    const handleDecrement=()=>{
        setCount((prevCount)=> prevCount - 1)
    }
    const handleReset=()=>{
        setCount(INITIAL_COUNT)
    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    return(
        <>
         <h3>{`現在のカウント数:${count}`}</h3>
         <h3>{`countの初期値:${INITIAL_COUNT}`}</h3>
         <button onClick={handleIncrement}>increment</button>
         <button onClick={handleDecrement}>decrement</button>
         <button onClick={handleReset}>reset</button>
         <p>{`Hello,${name}!!!!!`}</p>
         <p>{`nameの初期値:,${INITIAL_NAME}`}</p>
         <input type="text" onChange={handleChange}/>
        </>
    )
}

export default UseStateComp;