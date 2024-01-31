import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"
import { ReducerPallette } from "../../hooks/ReducerPallette"
import { useEffect, useReducer } from "react"
import Color from "color"

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
            const hasedURL = `${btoa(JSON.stringify(temporalStorage))}`
            history.replaceState(null, null, `:${hasedURL}`)
        }
    }, [state])

    useEffect(() => {
        changeColor(initialStates.color)
        changeHue(initialStates.hue)
        changeSaturation(initialStates.saturation)
        changeLightness(initialStates.lightness)
        changeNumberOfColors(initialStates.numberOfColors)
    }, [initialStates])

    return (
        <AnimatePresence>
            <motion.section
                animate={{
                    height: state.numberOfColors > 5 ? "720px" : "432px",
                    transition: {
                        type: "spring",
                        duration: 0.5,
                        stiffness: 200,
                        damping: 28,
                        bounce: 0.9
                    }
                }}
                className="w-[80%] p-4 flex flex-col gap-3 rounded-lg"
                style={{
                    backgroundColor: Color(state.color).isDark() ?
                        Color(state.color).lighten(0.3).hex().toString() + "30"
                        :
                        Color(state.color).hex().toString() + "20",
                    boxShadow: Color(state.color).isDark() ? "0 0 10px 0 " + Color(state.color).lighten(0.3).hex().toString() : "0 0 10px 0 " + Color(state.color).hex().toString(),
                    border: Color(state.color).isDark() ? "1px solid " + Color(state.color).lighten(0.3).hex().toString() : "1px solid " + Color(state.color).hex().toString()
                }}
            >
                <PalletteMenu
                    palletteIndex={index}
                    state={state}
                    changeHue={changeHue}
                    changeSaturation={changeSaturation}
                    changeLightness={changeLightness}
                    changeNumberOfColors={changeNumberOfColors}
                    newColor={newColor}
                    changeColor={changeColor}
                />
                <PalletteDisplay state={state} setUpColor={setUpColor} />
            </motion.section>
        </AnimatePresence>
    )

}
