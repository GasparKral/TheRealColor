import { createContext } from "react";

export const ReducerContext = createContext();

export const ReducerProvider = ({ children }) => {
    return (
        <ReducerContext.Provider>{children}</ReducerContext.Provider>
    )
}

