import { motion } from "framer-motion"
import Color from "color"
export const ColorCard = ({ hue, saturation, lightness, baseColor }) => {

    const getColor = Color(baseColor).hsl()

    return (
        <motion.article
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
            style={{
                backgroundColor: `hsl(${(getColor.color[0] + hue)}, ${(getColor.color[1] + saturation)}%, ${(getColor.color[2] + lightness)}%)`,
            }}
            className="w-full h-full min-h-[280px] rounded-lg"
        >

        </motion.article>
    )

}