import { ReducerPallette } from "./ReducerPallette";
import { useReducer, createContext, useState } from "react";
import { generateRandomColor } from "../hooks/logic/generateRandomColor"

export const PalletteContext = createContext();

export const PalletteProvider = ({ children }) => {

    const randomColor = generateRandomColor()
    const initialStates = { color: randomColor, hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 }
    const [state, dispatch] = useReducer(ReducerPallette, initialStates)

    const newColor = color => dispatch({ type: "GENERATE_COLOR", payload: { color } })
    const changeColor = color => dispatch({ type: "CHANGE_COLOR", payload: { color } })
    const setUpColor = color => dispatch({ type: "SET_UP:COLOR", payload: { color } })
    const changeHue = hue => dispatch({ type: "CHANGE_HUE", payload: { hue } })
    const changeSaturation = saturation => dispatch({ type: "CHANGE_SATURATION", payload: { saturation } })
    const changeLightness = lightness => dispatch({ type: "CHANGE_LIGHTNESS", payload: { lightness } })
    const changeNumberOfColors = numberOfColors => dispatch({ type: "CHANGE_NUMBER_OF_COLORS", payload: { numberOfColors } })

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

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

    const [task, setTask] = useState({ isTaskOpen: false, task: '' })

    return (
        <TaskContext.Provider
            value={{
                task,
                setTask
            }}
        >{children}</TaskContext.Provider>
    )
}