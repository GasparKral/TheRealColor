import { motion } from 'framer-motion'
export const Toast = ({ children }) => {

    return (
        <motion.aside
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                x: [150, 0],
                transition: { duration: 0.5 }
            }}
            className="fixed bottom-10 right-0 w-1/4 h-fit p-8 bg-zinc-900 bg-opacity-20 backdrop-blur-lg rounded-l-lg shadow-xl z-20"
        >
            {children}
        </motion.aside >
    )

}