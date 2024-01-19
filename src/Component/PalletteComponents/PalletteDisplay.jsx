import { useContext } from "react"
import { FormChangeContext, ReducerContext } from "../../hooks/Context"
import { ColorCard } from "./ColorCard"
import { motion } from "framer-motion"
export const PalletteDisplay = () => {

    const { state: dataState } = useContext(FormChangeContext)
    const { state: colorState } = useContext(ReducerContext)

    const colorsPalletteConstructor = () => {

        const colorsPallette = []

        for (let i = 0; i < dataState.numberOfColors; i++) {

            colorsPallette.push(
                < ColorCard
                    key={i}
                    baseColor={colorState.color}
                    hue={dataState.hue * i * 2.5 / dataState.numberOfColors}
                    saturation={dataState.saturation * i * 3 / dataState.numberOfColors}
                    lightness={dataState.lightness * i * 2.5 / dataState.numberOfColors}
                >
                </ColorCard >
            )
        }
        return colorsPallette
    }

    return (
        <motion.div
            layout
            className="w-full h-3/5 grid grid-cols-5   gap-2 "
        >
            {colorsPalletteConstructor().map(color => color)}
        </motion.div>
    )

}