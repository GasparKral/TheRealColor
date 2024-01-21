import { useContext } from "react"
import { PalletteContext } from "../../hooks/Context"
import { ColorCard } from "./ColorCard"
import { motion } from "framer-motion"
export const PalletteDisplay = () => {

    const { state } = useContext(PalletteContext)

    const colorsPalletteConstructor = () => {

        const colorsPallette = []

        for (let i = 0; i < state.numberOfColors; i++) {

            colorsPallette.push(
                < ColorCard
                    key={i}
                    baseColor={state.color}
                    hue={state.hue * i * 2.5 / state.numberOfColors}
                    saturation={state.saturation * i * 3 / state.numberOfColors}
                    lightness={state.lightness * i * 2.5 / state.numberOfColors}
                >
                </ColorCard >
            )
        }
        return colorsPallette
    }

    const variants = {
        small: {
            height: "60%"
        },
        large: {
            height: "100%"
        }
    }

    return (
        <motion.div
            variants={variants}
            animate={state.numberOfColors > 5 ? "large" : "small"}
            layout
            className="w-full h-3/5 grid grid-cols-5   gap-2 "
        >
            {colorsPalletteConstructor().map(color => color)}
        </motion.div>
    )

}