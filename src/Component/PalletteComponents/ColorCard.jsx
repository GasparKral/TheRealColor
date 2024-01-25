import { motion } from "framer-motion"
import { useState, useContext } from "react"
import { GeneralContext } from "../../hooks/Context"
import { clampValue } from "../../hooks/logic/clampValue"
import { ClipBoardCopy } from "../../assets/ClipBoardCopy"
import { Close } from "../../assets/Close"
import { SetUp } from "../../assets/SetUp"
import { ShowColorValues } from "./ShowColorValues"

import Color from "color"
export const ColorCard = ({ hue, saturation, lightness, baseColor, setUpColor }) => {

    const { setTask } = useContext(GeneralContext)

    const getColor = Color(baseColor).hsl()

    const [isOpen, setIsOpen] = useState(false)

    const formVariants = {
        open: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            scale: 0.5,
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    }

    let lightnessValue = clampValue(Math.round(getColor.color[2] + lightness), 100, Math.round(getColor.color[2] + lightness))
    let saturationValue = clampValue(Math.round(getColor.color[1] + saturation), 100, Math.round(getColor.color[1] + saturation))
    let hueValue = clampValue(Math.round(getColor.color[0] + hue), 360, Math.round(getColor.color[0] + hue))

    const closeForm = (e) => {
        e.preventDefault()
        setIsOpen(false)
    }

    const updateColor = (color, e) => {
        e.preventDefault()
        setUpColor(Color(color).hex().toString())
    }

    const openForm = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    const copyColor = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(Color(bgColor).hex().toString())
        setTask({ isTaskOpen: true, task: `Copied ${Color(bgColor).hex().toString()} to clipboard` })
        setTimeout(() => setTask({ isTaskOpen: false, task: '' }), 3000)
    }

    const bgColor = `hsl(${(getColor.color[0] + hue)}, ${(getColor.color[1] + saturation)}%, ${(getColor.color[2] + lightness)}%)`
    return (
        <motion.article
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
            style={{
                backgroundColor: bgColor
            }}
            onClick={openForm}
            className="w-full h-full min-h-[280px] rounded-lg"
        >
            <motion.form
                layout
                initial="closed"
                variants={formVariants}
                animate={isOpen ? "open" : "closed"}
                className=" flex flex-col p-4 gap-1 text-end w-full h-full rounded-lg items-end"
            >
                <div
                    className="flex flex-col gap-1 text-end w-full h-[90%] rounded-lg"
                >
                    <span htmlFor="lightness"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms"
                        }}
                    >
                        Lightness:
                        <ShowColorValues value={lightnessValue} bgColor={bgColor} />
                    </span>
                    <span htmlFor="saturation"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms"
                        }}
                    >
                        Saturation:
                        <ShowColorValues value={saturationValue} bgColor={bgColor} />
                    </span>
                    <span htmlFor="hue"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms"
                        }}
                    >
                        Hue:
                        <ShowColorValues value={hueValue} bgColor={bgColor} />
                    </span>
                </div>
                <div
                    className="flex flex-row-reverse justify-between w-full rounded-lg"
                >
                    <button
                        onClick={closeForm}
                        className="w-fit px-2 rounded-fulltransition-colors duration-300  text-neutral-50"
                        type="button"
                        aria-label="Close more Information"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            borderColor: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms, border-color easeIn 300ms"
                        }}
                    >
                        {Close()}
                    </button>
                    <button
                        aria-label="Set up the current color of the card"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            borderColor: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms, border-color easeIn 300ms"
                        }}
                        className="w-fit px-2 rounded-full transition-colors duration-300 text-neutral-50"
                        onClick={(e) => updateColor(bgColor, e)}
                    >
                        {SetUp()}
                    </button>
                    <button
                        aria-label="Copy to clipboard the current color of the card"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            borderColor: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms, border-color easeIn 300ms"
                        }}
                        className="w-fit px-2 rounded-full transition-colors duration-300 text-neutral-50"
                        onClick={(e) => copyColor(e)}
                    >
                        {ClipBoardCopy()}
                    </button>
                </div>
            </motion.form>
        </motion.article >
    )

}