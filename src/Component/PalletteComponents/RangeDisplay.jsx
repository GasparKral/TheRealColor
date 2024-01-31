import Color from "color"
export const RangeDisplay = ({ name, value, max, min, update, state }) => {

    return (
        <div
            className="flex items-center justify-center gap-2 w-1/3 px-2"
        >
            <span
                htmlFor={name}
                className="w-fit text-sm font-medium text-gray-900 dark:text-white select-none"
            >{name}:</span>
            <span
                htmlFor={name}
                className="select-none"
            >{value}</span>
            <input
                className="w-fit h-2 bg-neutral-400 rounded-lg appearance-none cursor-pointer"
                style={{
                    background: Color(state.color).isDark() ? Color(state.color).lighten(0.5).hex().toString() : Color(state.color).hex().toString()
                }}
                type="range"
                min={min}
                max={max}
                value={value}
                name={name}
                step={1}
                aria-label="Default"
                onChange={e => update(parseInt(e.target.value))}
            />

            <span
                className="select-none"
            >{max}</span>
        </div>
    )
}