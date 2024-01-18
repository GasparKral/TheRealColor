import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"

export const PalletteBox = () => {

    return (
        <AnimatePresence>
            <motion.section
                className="w-10/12 h-screen flex flex-col justify-center items-center gap-3 align-middle"
            >
                <PalletteMenu />
                <PalletteDisplay />
            </motion.section>
        </AnimatePresence>
    )

}