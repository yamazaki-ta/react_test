import { useContext } from "react";
import { TextContext } from "../pages/UseContextPage";

const ThirdConsumer = () =>{
    const textData = useContext(TextContext);
    return(
        <>
         <p>Third Consumer</p>
         <p>{textData}</p>
        </>
    );
};
export default ThirdConsumer;