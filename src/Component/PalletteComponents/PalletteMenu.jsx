import { RangeDisplay } from "./RangeDisplay"
import { useContext, useEffect, useState } from "react"
import { GeneralContext } from "../../hooks/Context"
import { motion } from "framer-motion"
import { ColorNameFetch } from "../../hooks/services/ColorNameFetch"
import { useDebounce } from "usehooks-ts"
import { Close } from "../../assets/Close"
import Color from "color"

export const PalletteMenu = ({ palletteIndex, state, changeHue, changeSaturation, changeLightness, changeNumberOfColors, newColor, changeColor }) => {

    const { eliminatePallettes } = useContext(GeneralContext)
    const debouncedColor = useDebounce(state.color, 250)
    const [colorName, setColorName] = useState("")

    useEffect(() => {
        ColorNameFetch(debouncedColor)
            .then(res => setColorName(res))
    }, [debouncedColor])

    const eliminatePallettesFunction = () => {
        const temporalStorage = JSON.parse(window.localStorage.getItem("palletteObject"))
        temporalStorage.splice(palletteIndex, 1)
        window.localStorage.setItem("palletteObject", JSON.stringify(temporalStorage))
        eliminatePallettes(JSON.parse(window.localStorage.getItem("palletteObject")))
    }

    return (
        <motion.form
            layout
            className="w-full h-fit flex flex-col items-center  align-middle justify-center gap-2"
        >
            <fieldset
                className="flex row gap-3 justify-between w-full pt-4 pb-2 px-2 rounded-lg"
                style={{
                    border: Color(state.color).isDark() ? "1px solid " + Color(state.color).lighten(0.3).hex().toString() : "1px solid " + Color(state.color).hex().toString(),
                    boxShadow: Color(state.color).isDark() ? "inset 0 0 4px 0 " + Color(state.color).lighten(0.3).hex().toString() : "inset 0 0 4px 0 " + Color(state.color).hex().toString()
                }}
            >
                <div
                    className="flex  items-center gap-3 relative w-1/2 ml-10"
                >
                    1
                    <span
                        htmlFor="numberOfColors"
                        className="absolute -top-3 left-20 select-none"
                    >{state.numberOfColors}</span>
                    <input
                        name="numberOfColors"
                        value={state.numberOfColors}
                        min={1}
                        max={10}
                        step={1}
                        aria-label="number of colors range picker"
                        onChange={e => changeNumberOfColors(parseInt(e.target.value))}
                        type="range"
                        className="w-fit h-2 rounded-lg appearance-none cursor-pointer "
                        style={{
                            background: Color(state.color).isDark() ? Color(state.color).lighten(0.5).hex().toString() : Color(state.color).hex().toString()
                        }}
                    />
                    <span
                        htmlFor="numberOfColors"
                        className="select-none"
                    >10</span>
                </div>
                <div
                    className="flex flex-row justify-evenly w-fit gap-20 ali"
                >
                    <span
                        className="text-[1.1rem]"
                    >
                        {(colorName ? colorName : "Color") + ": "}
                        <input
                            name="color"
                            type="color"
                            value={state.color}
                            onChange={e => changeColor(e.target.value)}
                        />
                    </span>
                    <button
                        type="button"
                        onClick={() => newColor()}
                        style={{
                            border: Color(state.color).isDark() ? "2px solid " + Color(state.color).lighten(0.3).hex().toString() : "2px solid " + Color(state.color).hex().toString()
                        }}
                        className="py-[2px] px-4 rounded-lg mb-1 text-xs cursor-pointer"
                    >
                        New Color
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => eliminatePallettesFunction()}
                    className="mb-[2px] mr-10"
                >
                    <Close />
                </button>
            </fieldset>
            <fieldset
                className="flex flex-row columns-3 gap-3 w-full justify-around p-2 rounded-lg"
                style={{
                    border: Color(state.color).isDark() ? "1px solid " + Color(state.color).lighten(0.3).hex().toString() : "1px solid " + Color(state.color).hex().toString(),
                    boxShadow: Color(state.color).isDark() ? "inset 0 0 4px 0 " + Color(state.color).lighten(0.3).hex().toString() : "inset 0 0 4px 0 " + Color(state.color).hex().toString()
                }}
            >
                <RangeDisplay name={"Saturation "} max={10} min={-10} value={state.saturation} update={changeSaturation} state={state} />
                <RangeDisplay name={"Lightness "} max={10} min={-10} value={state.lightness} update={changeLightness} state={state} />
                <RangeDisplay name={"Hue "} max={18} min={-18} value={state.hue} update={changeHue} state={state} />
            </fieldset>
        </motion.form>
    )

}