import { ReducerColor } from "./ReducerColorUpdate";
import { ReducerControls } from "./ReducerControlsUpdate";
import { useReducer, createContext } from "react";
import { generateRandomColor } from "../hooks/logic/generateRandomColor"

export const ReducerContext = createContext();

export const ReducerProvider = ({ children }) => {
    const randomColor = generateRandomColor()
    const initialStatesP = { color: randomColor }
    const [state, dispatch] = useReducer(ReducerColor, initialStatesP)

    const newColor = color => dispatch({ type: "GENERATE_COLOR", payload: { color } })
    const changeColor = color => dispatch({ type: "CHANGE_COLOR", payload: { color } })

    return (
        <ReducerContext.Provider
            value={{
                initialStatesP,
                state,
                newColor,
                changeColor,
            }}
        >{children}</ReducerContext.Provider>
    )
}

export const FormChangeContext = createContext()

export const FormChangeProvider = ({ children }) => {

    const initialStatesF = { hue: 18, saturation: 7, lightness: 7, numberOfColors: 7 }
    const [state, dispatch] = useReducer(ReducerControls, initialStatesF)

    const changeHue = hue => dispatch({ type: "CHANGE_HUE", payload: { hue } })
    const changeSaturation = saturation => dispatch({ type: "CHANGE_SATURATION", payload: { saturation } })
    const changeLightness = lightness => dispatch({ type: "CHANGE_LIGHTNESS", payload: { lightness } })
    const changeNumberOfColors = numberOfColors => dispatch({ type: "CHANGE_NUMBER_OF_COLORS", payload: { numberOfColors } })

    return (
        <FormChangeContext.Provider
            value={{
                initialStatesF,
                state,
                changeHue,
                changeSaturation,
                changeLightness,
                changeNumberOfColors
            }}
        >{children}</FormChangeContext.Provider>
    )
}