import { motion } from "framer-motion"
export const AddNewPallette = ({ updateNumber }) => {

    const handleClick = () => {
        updateNumber()
        setTimeout(() => {
            scrollBy({
                top: 500,
                left: 0,
                behavior: 'smooth'
            });
        }, 100)
    }

    return (
        <motion.article
            layout
            className="flex justify-center items-center w-1/3 h-fit p-4 bg-neutral-500 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl relative"
        >
            <button
                onClick={handleClick}
            >
                <h1 className="text-3xl font-bold">Add New Pallette</h1>
            </button>
        </motion.article>
    )
}