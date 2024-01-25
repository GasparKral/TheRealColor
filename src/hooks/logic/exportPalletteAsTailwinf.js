import { ColorNameFetch } from "../services/ColorNameFetch"
import { colorVariationPrevLoad } from "../logic/colorVariationPrevLoad"
export const exportPalletteAsTailwind = () => {
    const colorNameArray = []
    const returnedArray = []
    const data = JSON.parse(window.localStorage.getItem("palletteObject"))
    const promises = data.map(async (color, index) => {
        const temporalArray = colorVariationPrevLoad(color);
        const name = await ColorNameFetch(color.color);
        colorNameArray.push(name.replace(/ /gm, "-"));
        returnedArray.push({
            [colorNameArray[index]]: {
                "100": temporalArray[0],
                "200": temporalArray[1],
                "300": temporalArray[2],
                "400": temporalArray[3],
                "500": temporalArray[4],
                "600": temporalArray[5],
                "700": temporalArray[6],
                "800": temporalArray[7],
                "900": temporalArray[8]
            }
        })
    })

    Promise.all(promises).then(() => {

        const blob = new Blob([JSON.stringify(returnedArray, null, 2)], { type: "application/json" })
        const href = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = href
        link.download = "pallette.json"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    })

}