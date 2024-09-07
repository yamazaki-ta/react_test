import { MouseEventHandler } from "react";

interface ToggleButtonProps {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }

const ToggleButton= ({ toggle, setToggle }:ToggleButtonProps) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> =()=>setToggle(!toggle);
    return (
   <button onClick={handleClick}>
     {toggle ? "ログインボタン" : "ログアウトボタン" }
   </button>
 );
};

export  default ToggleButton

