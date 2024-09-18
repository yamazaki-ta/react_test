import { CountContext } from "../context/CountContext";
import Counter from "../components/counter/Counter";
const CountContextPage=()=>{
    return(
        <>
         <CountContext>
            <Counter />
         </CountContext>
        </>
    )

}
export default CountContextPage;