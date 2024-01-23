import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"

import { PalletteProvider } from '../../hooks/Context.jsx'

export const PalletteBox = ({ pallette, index }) => {

    return (
        <AnimatePresence>
            <PalletteProvider initialStates={pallette} palletteIndex={index}>
                <motion.section
                    layout
                    className="w-[80%] h-fit p-4 flex flex-col justify-center items-center gap-3 align-middle rounded-lg relative"
                >
                    <PalletteMenu />
                    <PalletteDisplay />
                </motion.section>
            </PalletteProvider>
        </AnimatePresence>
    )

}
