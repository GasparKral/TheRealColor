import { createContext } from "react";
import { Reducer } from "./Reducer";
import { useReducer } from "react";
import { generateRandomColor } from "../hooks/logic/generateRandomColor"

export const ReducerContext = createContext();
const initialStates = { hue: 18, saturation: 7, lightness: 7, paletteNumber: 1, numberOfColors: 5, color: generateRandomColor() }

export const ReducerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialStates)

    const changeHue = hue => dispatch({ type: "CHANGE_HUE", payload: { hue } })
    const newColor = color => dispatch({ type: "GENERATE_COLOR", payload: { color } })
    const changeColor = color => dispatch({ type: "CHANGE_COLOR", payload: { color } })
    const changeSaturation = saturation => dispatch({ type: "CHANGE_SATURATION", payload: { saturation } })
    const changeLightness = lightness => dispatch({ type: "CHANGE_LIGHTNESS", payload: { lightness } })
    const createPalette = paletteNumber => dispatch({ type: "CREATE_PALETTE", payload: { paletteNumber } })
    const updatePaletteNumber = numberOfColors => dispatch({ type: "UPDATE_PALETTE_NUMBER", payload: { numberOfColors } })

    return (
        <ReducerContext.Provider
            value={{
                state,
                changeHue,
                changeSaturation,
                changeLightness,
                newColor,
                changeColor,
                createPalette,
                updatePaletteNumber
            }}
        >{children}</ReducerContext.Provider>
    )
}

