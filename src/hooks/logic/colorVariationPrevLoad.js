import Color from "color"
export const colorVariationPrevLoad = (palletteInfo) => {

    const allPallette = []
    const hslColor = Color(palletteInfo.color).hsl()

    for (let i = 1; i <= 10; i++) {
        const hue = (palletteInfo.hue * i * 2.5 / 10)
        const saturation = (palletteInfo.saturation * i * 3 / 10)
        const lightness = (palletteInfo.lightness * i * 2.5 / 10)
        allPallette.push(Color.hsl(hslColor.color[0] + hue, hslColor.color[1] + saturation, hslColor.color[2] + lightness).hex())
    }

    return allPallette

}