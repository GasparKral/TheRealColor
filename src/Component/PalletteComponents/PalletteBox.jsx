import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"
import { ReducerPallette } from "../../hooks/ReducerPallette"
import { useContext, useEffect, useReducer } from "react"
import { GeneralContext } from "../../hooks/Context"

export const PalletteBox = ({ palletteIndex }) => {

    const { pallettes, palletteObject, setPalletteObject } = useContext(GeneralContext)

    const [state, dispatch] = useReducer(ReducerPallette, pallettes[palletteIndex])

    const newColor = color => dispatch({ type: "GENERATE_COLOR", payload: { color } })
    const changeColor = color => dispatch({ type: "CHANGE_COLOR", payload: { color } })
    const setUpColor = color => dispatch({ type: "SET_UP_COLOR", payload: { color } })
    const changeHue = hue => dispatch({ type: "CHANGE_HUE", payload: { hue } })
    const changeSaturation = saturation => dispatch({ type: "CHANGE_SATURATION", payload: { saturation } })
    const changeLightness = lightness => dispatch({ type: "CHANGE_LIGHTNESS", payload: { lightness } })
    const changeNumberOfColors = numberOfColors => dispatch({ type: "CHANGE_NUMBER_OF_COLORS", payload: { numberOfColors } })

    useEffect(() => {

        if (state !== palletteObject[palletteIndex]) {
            setPalletteObject([...palletteObject.slice(0, palletteIndex), state, ...palletteObject.slice(palletteIndex + 1)])
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <AnimatePresence>

            <motion.section
                layout
                className="w-[80%] h-fit p-4 flex flex-col justify-center items-center gap-3 align-middle rounded-lg relative"
            >
                <PalletteMenu state={state} changeNumberOfColors={changeNumberOfColors} changeColor={changeColor} changeHue={changeHue} changeSaturation={changeSaturation} changeLightness={changeLightness} newColor={newColor} />
                <PalletteDisplay setUpColor={setUpColor} state={state} />
            </motion.section>

        </AnimatePresence>
    )

}
