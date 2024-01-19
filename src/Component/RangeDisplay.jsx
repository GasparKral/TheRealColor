
export const RangeDisplay = ({ name, value, max, update }) => {

    return (
        <div
            className="flex items-center justify-center gap-2 w-1/3 px-2"
        >
            <label
                className="w-fit text-sm font-medium text-gray-900 dark:text-white"
            >{name}:</label>
            <label>{value != undefined ? value : 5}</label>
            <input
                className="w-fit h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                type="range"
                min={0}
                max={max}
                defaultValue={value}
                name={name}
                step={1}
                onChange={e => update(e.target.value)}
            />

            <label >{max}</label>
        </div>
    )
}