import { ColorCard } from "./ColorCard"
import { motion } from "framer-motion"
export const PalletteDisplay = ({ state, setUpColor }) => {

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
                    setUpColor={setUpColor}
                >
                </ColorCard >
            )
        }
        return colorsPallette
    }

    return (
        <motion.div
            className="w-full h-[280px] grid grid-cols-5  gap-2 "
        >
            {colorsPalletteConstructor().map(color => color)}
        </motion.div>
    )

}