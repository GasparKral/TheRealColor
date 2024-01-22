import { generateRandomColor } from "../hooks/logic/generateRandomColor"
import { createContext, useState } from "react"
import { useLocalStorage } from "usehooks-ts";

export const GeneralContext = createContext()

export const GeneralProvider = ({ children }) => {

    const [task, setTask] = useState({ isTaskOpen: false, task: '' })

    const initialPallette = { color: generateRandomColor(), hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 }
    const [pallettes, setPallettes] = useState(window.localStorage.getItem("palletteObject") ? JSON.parse(window.localStorage.getItem("palletteObject")) : [initialPallette])

    const newPallette = (pallette) => setPallettes([...pallettes, pallette])
    const eliminatePallette = (index) => setPallettes([...pallettes.slice(0, index), ...pallettes.slice(index + 1)])

    const [palletteObject, setPalletteObject] = useLocalStorage("palletteObject", pallettes)

    return (
        <GeneralContext.Provider
            value={{
                task,
                setTask,
                pallettes,
                newPallette,
                setPallettes,
                generateRandomColor,
                eliminatePallette,
                palletteObject,
                setPalletteObject,
                initialPallette
            }}
        >{children}</GeneralContext.Provider>
    )
}