import { useEffect, useState, useRef } from "react"

const  UsePage =()=> {
    const INITIAL_NUM = 0
    const [count,setCount] = useState<number>(INITIAL_NUM)
    const [toggle,setToggle] = useState<boolean>(true)
    const handleAddClick = () =>{
        console.log("add",count);
        setCount((prevCount)=> prevCount + 1 )
    }
    const inputRef = useRef<HTMLInputElement>(null)
    console.log("レフ",inputRef.current);
    
    const handleResetClick = () =>{
        setCount(INITIAL_NUM )
    }

    const countIncrement =()=>{
        console.log("ここ"); 
        setCount((prevCount)=>
        prevCount+1)
        console.log(count,"現在のカウント");
    }

    const handleToggle =() =>{
        setToggle(!toggle)
    }

    const handleFocusClick=()=>{
        inputRef?.current?.focus()
    }
    // useEffect(callBackfunc(),[])
    // useEffect(() => {
    //     const timer = setInterval(countIncrement, 1000);
    //     return () => {
    //       console.log("timerが削除されました。");
    //       clearInterval(timer);
    //     };
    //   }, []);
    return(
        <>
        <button onClick={handleToggle}>
        {toggle ? "タイマー表示" : "タイマー非表示"}
        </button>
         <p>{`現在のカウント${count}`}</p>
         <button onClick={handleAddClick}>+1 ボタン</button>
         <button onClick={handleResetClick}>リセット</button>
         <button onClick={handleFocusClick}>インプットフォーカスボタン</button>
         <input type="text" ref={inputRef}/>
        </>
    )
}
export default UsePage