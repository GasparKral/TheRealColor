import Color from "color"
export const ShowColorValues = ({ value, bgColor }) => {

    return (
        <input
            value={value}
            readOnly
            name="saturation"
            type="number"
            style={{
                color: Color(bgColor).darken(0.3).isDark() ? "#fafafa" : "#1c1c1c",
                transition: "color easeIn 300ms"
            }}
            className="w-[25%] rounded-full  text-neutral-50 bg-transparent text-end"
        />
    )

}