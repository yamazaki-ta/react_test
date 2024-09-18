import { createContext } from "react";

export const TextContext = createContext<string>("");

export const text = "これはProviderから渡されたテキストです。"

export const UseContextPage =({ children }: { children: React.ReactNode })=>{
    return(
        <TextContext.Provider value={text}>
            {children}
        </TextContext.Provider>
    );
}