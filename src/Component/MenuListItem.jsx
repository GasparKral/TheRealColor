import { motion } from "framer-motion"
export const MenuListItem = ({ name, state, selectIt, variants, textRef, svgRef }) => {

    return (
        <motion.li
            ref={textRef}
            className="text-neutral-50 text-lg border-t-2 border-neutral-50 w-1/2 bg-opacity-20 cursor-pointer overflow-hidden relative pl-2 z-10"
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.4 }
            }}
            variants={variants}
            animate={state == name ? "selectedTab" : "notSelectedTab"} transition={{ duration: 0.40, type: "tween" }}
            onClick={() => selectIt(name)}
        >
            <motion.svg
                ref={svgRef}
                height={20}
                width={20}
                className="absolute top-0 left-1/3 -z-10"
                initial={{ scale: 0 }}
                variants={variants}
                animate={state == name ? "selectedSvg" : "notSelectedSvg"} transition={{ duration: 0.43, type: "tween" }}
            >
                <circle cx="10" cy="10" r="9" stroke="#fafafa" strokeWidth="2" fill="#fafafa"></circle>
            </motion.svg>
            {name}
        </motion.li>
    )

}