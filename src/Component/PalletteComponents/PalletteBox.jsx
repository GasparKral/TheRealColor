import { PalletteDisplay } from "./PalletteDisplay"
import { PalletteMenu } from "./PalletteMenu"
import { motion, AnimatePresence } from "framer-motion"

import { ReducerProvider, FormChangeProvider } from '../../hooks/Context.jsx'

export const PalletteBox = () => {

    return (
        <AnimatePresence>
            <ReducerProvider>
                <FormChangeProvider>
                    <motion.section
                        layout
                        className="w-[80%] h-fit p-4 flex flex-col justify-center items-center gap-3 align-middle rounded-lg relative"
                    >
                        <PalletteMenu />
                        <PalletteDisplay />
                    </motion.section>
                </FormChangeProvider>
            </ReducerProvider>
        </AnimatePresence>
    )

}
