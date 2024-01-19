import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"

export const PalletteBox = () => {

    return (
        <AnimatePresence>
            <motion.section
                className="w-10/12 h-fit p-4 flex flex-col justify-center items-center gap-3 align-middle ring-1 ring-neutral-50 rounded-lg "
            >
                <PalletteMenu />
                <PalletteDisplay />
            </motion.section>
        </AnimatePresence>
    )

}
