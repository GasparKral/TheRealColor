import { RangeDisplay } from "./RangeDisplay"
import { useContext, useEffect, useState } from "react"
import { ReducerContext, FormChangeContext } from "../../hooks/Context"
import { motion } from "framer-motion"
import { ColorNameFetch } from "../../hooks/services/ColorNameFetch"
import { useDebounce } from "usehooks-ts"

export const PalletteMenu = () => {

    const { state: stateP, newColor, changeColor } = useContext(ReducerContext)
    const { state: stateF, changeHue, changeSaturation, changeLightness, changeNumberOfColors } = useContext(FormChangeContext)
    const debouncedColor = useDebounce(stateP.color, 250)
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
                    <label>1</label>
                    <label
                        className="absolute -top-3 left-20 select-none"
                    >{stateF.numberOfColors}</label>
                    <input
                        defaultValue={5}
                        min={1}
                        max={10}
                        step={1}
                        onChange={e => changeNumberOfColors(e.target.value)}
                        type="range"
                        className="w-fit h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <label
                        className="select-none"
                    >10</label>
                </div>
                <div
                    className="flex justify-between items-centerrelative w-1/4"
                >
                    <label>
                        {colorName + ": "}
                        <input
                            className="mb-2"
                            type="color"
                            value={stateP.color}
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
                <RangeDisplay name={"Saturation "} max={10} min={-10} value={stateF.saturation} update={changeSaturation} />
                <RangeDisplay name={"Lightness "} max={10} min={-10} value={stateF.lightness} update={changeLightness} />
                <RangeDisplay name={"Hue "} max={18} min={-18} value={stateF.hue} update={changeHue} />
            </fieldset>
        </motion.form>
    )

}