import { Link } from "react-router-dom"
import { MenuListItem } from "../Component/MenuListItem"
import { useState, useRef, useEffect } from "react"
import { motion, useAnimate, stagger, AnimatePresence } from "framer-motion"

const UserInfo = () => {

    const svgRef = useRef()
    const textRef = useRef()
    const [selectedTab, setSelectedTab] = useState("User Info")
    const [target, userAimation] = useAnimate()

    useEffect(() => {
        userAimation("li,a", {
            opacity: [0, 1],
            x: [-100, 0]
        }, {
            delay: stagger(0.1)
        })
    }, [userAimation])

    const variants = {
        selectedTab: {
            color: "#3b82f6",
            borderRadius: "8px",
            target: textRef.current,
        },
        notSelectedTab: {
            scale: 1,
            color: "#fafafa",
            borderRadius: "0",
        },
        selectedSvg: {
            scale: 14,
            opacity: 1,
            target: svgRef.current
        },
        notSelectedSvg: {
            scale: 0,
            opacity: 0,
            target: svgRef.current
        }
    }

    const selectTab = (tab) => {
        setSelectedTab(tab)
    }

    return (
        <AnimatePresence>
            <main
                key={"UserInfo"}
                className="flex flex-row bg-gradient-to-l from-sky-400 to-blue-500 h-screen w-screen columns-2 justify-center items-start pr-40 py-40"
                style={{
                    gridTemplateColumns: "30% 1fr",
                }}
            >
                <motion.aside
                    className="w-1/3 0 px-4 flex flex-col justify-center content-start items-end pr-12"
                >

                    <motion.menu
                        className="flex flex-col gap-2 items-end w-2/3 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        ref={target}
                    >
                        <Link
                            key={"Back"}
                            to="/"
                            className="text-white text-xl rounded-full px-4 mb-4 w-fit text-center align-middle cursor-pointer hover:bg-neutral-50 hover:text-blue-500 transition-colors ring-2 ring-neutral-50 duration-300"
                        >
                            Back
                        </Link>
                        <MenuListItem key={"UserInfo"} name={"User Info"} state={selectedTab} selectIt={selectTab} variants={variants} svgRef={svgRef} textRef={textRef} />
                        <MenuListItem key={"Pallettes"} name={"Pallettes"} state={selectedTab} selectIt={selectTab} variants={variants} svgRef={svgRef} textRef={textRef} />
                        <MenuListItem key={"Payments"} name={"Payments"} state={selectedTab} selectIt={selectTab} variants={variants} svgRef={svgRef} textRef={textRef} />
                        <MenuListItem key={"Privacy"} name={"Privacy"} state={selectedTab} selectIt={selectTab} variants={variants} svgRef={svgRef} textRef={textRef} />
                        <MenuListItem key={"Account"} name={"Account"} state={selectedTab} selectIt={selectTab} variants={variants} svgRef={svgRef} textRef={textRef} />
                    </motion.menu>
                </motion.aside>
                <motion.section
                    className="w-2/3 h-full bg-neutral-50 bg-opacity-50 rounded-3xl p-4"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, transition: { duration: 0.7 } }}
                >

                </motion.section>
            </main>
        </AnimatePresence>
    )

}

export default UserInfo