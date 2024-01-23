import { createContext, useState } from "react";
import { generateRandomColor } from "../hooks/logic/generateRandomColor"
import { useEffect } from "react"

export const GeneralContext = createContext()

export const GeneralProvider = ({ children }) => {

    const [task, setTask] = useState({ isTaskOpen: false, task: '' })

    const initialPallette = { color: generateRandomColor(), hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 }
    const [pallettes, setPallettes] = useState(window.localStorage.getItem("palletteObject") ? JSON.parse(window.localStorage.getItem("palletteObject")) : [initialPallette])

    const newPallette = (pallette) => setPallettes([...pallettes, pallette])
    const eliminatePallettes = (newPallettes) => setPallettes(newPallettes)

    useEffect(() => {
        window.localStorage.setItem("palletteObject", JSON.stringify(pallettes))
    }, [pallettes.length])

    return (
        <GeneralContext.Provider
            value={{
                task,
                setTask,
                pallettes,
                newPallette,
                setPallettes,
                eliminatePallettes,
                generateRandomColor,
                initialPallette
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}