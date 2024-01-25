import { ColorNameFetch } from "../services/ColorNameFetch";
import { colorVariationPrevLoad } from "../logic/colorVariationPrevLoad";
export const exportPalletteAsCSS = () => {
    const colorNameArray = []
    const returnedArray = []
    const data = JSON.parse(window.localStorage.getItem("palletteObject"))
    const promises = data.map(async (color, index) => {
        const temporalArray = colorVariationPrevLoad(color);
        const name = await ColorNameFetch(color.color);
        colorNameArray.push(name.replace(/ /gm, "-"));
        returnedArray.push(
            `--${colorNameArray[index]}-100 : ${temporalArray[0]}`,
            `--${colorNameArray[index]}-200 : ${temporalArray[1]}`,
            `--${colorNameArray[index]}-300 : ${temporalArray[2]}`,
            `--${colorNameArray[index]}-400 : ${temporalArray[3]}`,
            `--${colorNameArray[index]}-500 : ${temporalArray[4]}`,
            `--${colorNameArray[index]}-600 : ${temporalArray[5]}`,
            `--${colorNameArray[index]}-700 : ${temporalArray[6]}`,
            `--${colorNameArray[index]}-800 : ${temporalArray[7]}`,
            `--${colorNameArray[index]}-900 : ${temporalArray[8]}`,
            `--${colorNameArray[index]}-900 : ${temporalArray[9]}`
        )
    })

    Promise.all(promises).then(() => {
        console.log(JSON.stringify(returnedArray, null, 2).replace(/"/gm, "").replace(/,/gm, ";"));
        const blob = new Blob([JSON.stringify(returnedArray, null, 2)], { type: "text/CSS" })
        const href = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = href
        link.download = "pallette.json"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    })
}