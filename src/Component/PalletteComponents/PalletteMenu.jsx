import { RangeDisplay } from "./RangeDisplay"
import { useContext } from "react"
import { ReducerContext, FormChangeContext } from "../../hooks/Context"

export const PalletteMenu = ({ colorName }) => {

    const { state: stateP, newColor, changeColor } = useContext(ReducerContext)
    const { state: stateF, changeHue, changeSaturation, changeLightness, changeNumberOfColors } = useContext(FormChangeContext)

    return (
        <form
            className="w-full h-fit flex flex-col items-center p-4 align-middle justify-center gap-2"
        >
            <fieldset
                className="flex row gap-3 w-full justify-around border-2 border-zinc-500 pt-4 pb-2 px-2 rounded-lg"
            >
                <div
                    className="flex  items-center gap-3 relative w-1/2"
                >
                    <label>0</label>
                    <label
                        className="absolute -top-3 left-20"
                    >{stateF.numberOfColors}</label>
                    <input
                        defaultValue={7}
                        min={0}
                        max={10}
                        step={1}
                        onChange={e => changeNumberOfColors(e.target.value)}
                        type="range"
                        className="w-fit h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <label>10</label>
                </div>
                <div
                    className="flex justify-between items-centerrelative w-1/4"
                >
                    <label>
                        {colorName ? colorName : "Color: "}
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
                <RangeDisplay name={"Saturation "} max={10} value={stateF.saturation} update={changeSaturation} />
                <RangeDisplay name={"Lightness "} max={10} value={stateF.lightness} update={changeLightness} />
                <RangeDisplay name={"Hue "} max={36} value={stateF.hue} update={changeHue} />
            </fieldset>
        </form>
    )

}