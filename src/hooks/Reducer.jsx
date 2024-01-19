import { generateRandomColor } from "./logic/generateRandomColor"

export const Reducer = (state, action) => {

    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {

        case 'CHANGE_COLOR': {
            const { color } = actionPayload
            return {
                color: color
            }
        }
        case 'GENERATE_COLOR': {
            return {
                color: generateRandomColor()
            }
        }
        case 'CHANGE_HUE': {
            const { hue } = actionPayload
            return {
                hue
            }
        }
        case 'CHANGE_SATURATION': {
            const { saturation } = actionPayload
            return {
                saturation
            }
        }
        case 'CHANGE_LIGHTNESS': {
            const { lightness } = actionPayload
            return {
                lightness
            }
        }
        case 'CREATE_PALETTE':
            return {

            }
        case 'UPDATE_PALETTE_NUMBER': {
            const { numberOfColors } = actionPayload
            return {
                numberOfColors
            }
        }
    }
}