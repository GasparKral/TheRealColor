import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"

export const PalletteBox = () => {

    return (
        <AnimatePresence>
            <motion.section
                layout
                className="w-[80%] h-fit p-4 flex flex-col justify-center items-center gap-3 align-middle rounded-lg "
            >
                <PalletteMenu />
                <PalletteDisplay />
            </motion.section>
        </AnimatePresence>
    )

}
