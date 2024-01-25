export const exportPalletteAsJSON = () => {
    const data = JSON.parse(window.localStorage.getItem("palletteObject"))
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const href = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = href
    link.download = "pallette.json"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}