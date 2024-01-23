import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"
import { ReducerPallette } from "../../hooks/ReducerPallette"
import { useEffect, useReducer } from "react"

export const PalletteBox = ({ initialStates, index }) => {

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
            temporalStorage[index] = state
            window.localStorage.setItem("palletteObject", JSON.stringify(temporalStorage))
        }
    }, [state])

    useEffect(() => {
        changeColor(initialStates.color)
        changeHue(initialStates.hue)
        changeSaturation(initialStates.saturation)
        changeLightness(initialStates.lightness)
    }, [initialStates])

    return (
        <AnimatePresence>
            <motion.section
                layout
                className="w-[80%] h-fit p-4 flex flex-col justify-center items-center gap-3 align-middle rounded-lg relative"
            >
                <PalletteMenu palletteIndex={index} state={state} changeHue={changeHue} changeSaturation={changeSaturation} changeLightness={changeLightness} changeNumberOfColors={changeNumberOfColors} newColor={newColor} changeColor={changeColor} />
                <PalletteDisplay state={state} setUpColor={setUpColor} />
            </motion.section>
        </AnimatePresence>
    )

}
