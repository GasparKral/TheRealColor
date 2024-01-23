import { RangeDisplay } from "./RangeDisplay"
import { useContext, useEffect, useState } from "react"
import { PalletteContext } from "../../hooks/Context"
import { motion } from "framer-motion"
import { ColorNameFetch } from "../../hooks/services/ColorNameFetch"
import { useDebounce } from "usehooks-ts"

export const PalletteMenu = () => {

    const { state, changeHue, changeSaturation, changeLightness, changeNumberOfColors, newColor, changeColor } = useContext(PalletteContext)
    const debouncedColor = useDebounce(state.color, 250)
    const [colorName, setColorName] = useState("")

    useEffect(() => {
        ColorNameFetch(debouncedColor)
            .then(res => setColorName(res))
    }, [debouncedColor])

    return (
        <motion.form
            layout
            className="w-full h-fit flex flex-col items-center  align-middle justify-center gap-2"
        >
            <fieldset
                className="flex row gap-3 w-full justify-around border-2 border-zinc-500 pt-4 pb-2 px-2 rounded-lg"
            >
                <div
                    className="flex  items-center gap-3 relative w-1/2"
                >
                    <label
                        htmlFor="numberOfColors"
                    >1</label>
                    <label
                        htmlFor="numberOfColors"
                        className="absolute -top-3 left-20 select-none"
                    >{state.numberOfColors}</label>
                    <input
                        name="numberOfColors"
                        defaultValue={5}
                        min={1}
                        max={10}
                        step={1}
                        aria-label="number of colors range picker"
                        onChange={e => changeNumberOfColors(parseInt(e.target.value))}
                        type="range"
                        className="w-fit h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <label
                        htmlFor="numberOfColors"
                        className="select-none"
                    >10</label>
                </div>
                <div
                    className="flex justify-between items-centerrelative w-1/4"
                >
                    <label>
                        {(colorName ? colorName : "Color") + ": "}
                        <input
                            name="color"
                            className="mb-2"
                            type="color"
                            value={state.color}
                            onChange={e => changeColor(e.target.value)}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={() => newColor()}
                        className="border-2 border-zinc-500 px-2 rounded-lg mb-2 text-xs cursor-pointer"
                    >
                        New Color
                    </button>
                </div>
            </fieldset>
            <fieldset
                className="flex flex-row columns-3 gap-3 w-full justify-around border-2 border-zinc-500 p-2 rounded-lg"

            >
                <RangeDisplay name={"Saturation "} max={10} min={-10} value={state.saturation} update={changeSaturation} />
                <RangeDisplay name={"Lightness "} max={10} min={-10} value={state.lightness} update={changeLightness} />
                <RangeDisplay name={"Hue "} max={18} min={-18} value={state.hue} update={changeHue} />
            </fieldset>
        </motion.form>
    )

}