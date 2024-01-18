import { motion, animate } from "framer-motion"
import { useRef } from "react"
export const MenuListItem = ({ name }) => {

    const svgRef = useRef()
    const textRef = useRef()

    const handleClick = () => {

        animate("li", {
            scale: 1,
            color: "#fafafa",
            borderRadius: "0",
            target: "li"
        })

        animate("svg", {
            scale: 0,
            target: "svg"
        }, {
            duration: 0.4
        })

        animate(svgRef.current, {
            scale: 14,
            target: svgRef.current
        }, {
            duration: 0.7
        })
        animate(textRef.current, {
            color: "#3b82f6",
            borderRadius: "8px",
            target: textRef.current
        }, {
            duration: 0.43
        })
    }

    return (
        <motion.li
            ref={textRef}
            className="text-neutral-50 text-md border-t-2 border-neutral-50 w-1/2 bg-opacity-20 cursor-pointer overflow-hidden relative pl-2"
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 }
            }}
            onClick={handleClick}
        >
            <motion.svg
                ref={svgRef}
                height={20}
                width={20}
                className="absolute top-0 left-1/3 -z-10"
                initial={{ scale: 0 }}
            >
                <circle cx="10" cy="10" r="9" stroke="#fafafa" strokeWidth="2" fill="#fafafa"></circle>
            </motion.svg>
            {name}
        </motion.li>
    )

}