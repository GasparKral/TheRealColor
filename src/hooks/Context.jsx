import { ReducerPallette } from "./ReducerPallette";
import { useReducer, createContext, useState } from "react";
import { generateRandomColor } from "../hooks/logic/generateRandomColor"
import { useEffect } from "react"

export const PalletteContext = createContext();

export const PalletteProvider = ({ children, initialStates, palletteIndex }) => {

    const [state, dispatch] = useReducer(ReducerPallette, initialStates)

    const newColor = color => dispatch({ type: "GENERATE_COLOR", payload: { color } })
    const changeColor = color => dispatch({ type: "CHANGE_COLOR", payload: { color } })
    const setUpColor = color => dispatch({ type: "SET_UP_COLOR", payload: { color } })
    const changeHue = hue => dispatch({ type: "CHANGE_HUE", payload: { hue } })
    const changeSaturation = saturation => dispatch({ type: "CHANGE_SATURATION", payload: { saturation } })
    const changeLightness = lightness => dispatch({ type: "CHANGE_LIGHTNESS", payload: { lightness } })
    const changeNumberOfColors = numberOfColors => dispatch({ type: "CHANGE_NUMBER_OF_COLORS", payload: { numberOfColors } })

    useEffect(() => {
        if (state !== initialStates) {
            const temporalStorage = JSON.parse(window.localStorage.getItem("palletteObject"))
            temporalStorage[palletteIndex] = state
            window.localStorage.setItem("palletteObject", JSON.stringify(temporalStorage))
            console.log("cambio", temporalStorage);
        }
    }, [state])

    return (
        <PalletteContext.Provider
            value={{
                initialStates,
                state,
                newColor,
                changeColor,
                setUpColor,
                changeHue,
                changeSaturation,
                changeLightness,
                changeNumberOfColors
            }}
        >{children}</PalletteContext.Provider>
    )
}

export const GeneralContext = createContext()

export const GeneralProvider = ({ children }) => {

    const [task, setTask] = useState({ isTaskOpen: false, task: '' })

    const initialPallette = { color: generateRandomColor(), hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 }
    const [pallettes, setPallettes] = useState(window.localStorage.getItem("palletteObject") ? JSON.parse(window.localStorage.getItem("palletteObject")) : [initialPallette])

    const newPallette = (pallette) => setPallettes([...pallettes, pallette])
    const eliminatePallette = (palletteIndex) => setPallettes(pallettes.filter((pallette, index) => index !== palletteIndex))

    useEffect(() => {
        window.localStorage.setItem("palletteObject", JSON.stringify(pallettes))
        console.log("localStorage", JSON.parse(window.localStorage.getItem("palletteObject")))
    }, [pallettes.length])

    return (
        <GeneralContext.Provider
            value={{
                task,
                setTask,
                pallettes,
                newPallette,
                eliminatePallette,
                setPallettes,
                generateRandomColor,
                initialPallette
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}