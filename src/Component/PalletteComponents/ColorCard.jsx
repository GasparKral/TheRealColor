import { motion } from "framer-motion"
import { useState, useContext } from "react"
import { ReducerContext, TaskContext } from "../../hooks/Context"
import { checkMinMaxValue } from "../../hooks/logic/checkMinMaxValue"
import Color from "color"
export const ColorCard = ({ hue, saturation, lightness, baseColor }) => {

    const { setUpColor } = useContext(ReducerContext)
    const { setTask } = useContext(TaskContext)

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

    let lightnessValue = checkMinMaxValue(Math.round(getColor.color[2] + lightness), 100, Math.round(getColor.color[2] + lightness))
    let saturationValue = checkMinMaxValue(Math.round(getColor.color[1] + saturation), 100, Math.round(getColor.color[1] + saturation))
    let hueValue = checkMinMaxValue(Math.round(getColor.color[0] + hue), 360, Math.round(getColor.color[0] + hue))

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
                    <label htmlFor="lightness"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms"
                        }}
                    >
                        Lightness:
                        <input
                            value={lightnessValue}
                            readOnly
                            name="saturation"
                            type="number"
                            style={{
                                color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                                transition: "color easeIn 300ms"
                            }}
                            className="w-[25%] rounded-full  text-neutral-50 bg-transparent text-end"
                        />
                    </label>
                    <label htmlFor="saturation"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms"
                        }}
                    >
                        Saturation:
                        <input
                            value={saturationValue}
                            readOnly
                            name="lightness"
                            type="number"
                            style={{
                                color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                                transition: "color easeIn 300ms"
                            }}
                            className="w-[25%] rounded-full  text-neutral-50 bg-transparent text-end"
                        />
                    </label>
                    <label htmlFor="hue"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms"
                        }}
                    >
                        Hue:
                        <input
                            value={hueValue}
                            readOnly
                            name="hue"
                            type="number"
                            style={{
                                color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                                transition: "color easeIn 300ms"
                            }}
                            className="w-[25%] rounded-full  text-neutral-50 bg-transparent text-end"
                        />
                    </label>
                </div>
                <div
                    className="flex flex-row-reverse justify-between w-full rounded-lg"
                >
                    <button
                        onClick={closeForm}
                        className="w-fit px-2 rounded-full hover:bg-neutral-50 hover:text-zinc-900 transition-colors duration-300 border-2 border-neutral-50 text-neutral-50"
                        type="button"
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            borderColor: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms, border-color easeIn 300ms"
                        }}
                    >
                        close
                    </button>
                    <button
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            borderColor: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms, border-color easeIn 300ms"
                        }}
                        className="w-fit  rounded-full hover:bg-neutral-50 hover:text-zinc-900 transition-colors duration-300 border-2 border-neutral-50 text-neutral-50 px-2"
                        onClick={(e) => updateColor(bgColor, e)}
                    >
                        set up
                    </button>
                    <button
                        style={{
                            color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            borderColor: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                            transition: "color easeIn 300ms, border-color easeIn 300ms"
                        }}
                        className="w-fit px-2 rounded-full hover:bg-neutral-50 hover:text-zinc-900 transition-colors duration-300 border-2 border-neutral-50 text-neutral-50"
                        onClick={(e) => copyColor(e)}
                    >
                        copy
                    </button>
                </div>
            </motion.form>
        </motion.article >
    )

}