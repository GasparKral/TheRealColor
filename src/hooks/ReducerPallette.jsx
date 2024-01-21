import { generateRandomColor } from "./logic/generateRandomColor"

export const ReducerPallette = (state, action) => {

    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {

        case 'CHANGE_COLOR': {
            const { color } = actionPayload
            return {
                color: color,
                hue: state.hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'GENERATE_COLOR': {
            return {
                color: generateRandomColor(),
                hue: state.hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'SET_UP:COLOR': {
            const { color } = actionPayload
            return {
                color: color,
                hue: state.hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_HUE': {
            const { hue } = actionPayload
            return {
                color: state.color,
                hue: hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_SATURATION': {
            const { saturation } = actionPayload
            return {
                color: state.color,
                hue: state.hue,
                saturation: saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_LIGHTNESS': {
            const { lightness } = actionPayload
            return {
                color: state.color,
                hue: state.hue,
                saturation: state.saturation,
                lightness: lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_NUMBER_OF_COLORS': {
            const { numberOfColors } = actionPayload
            return {
                color: state.color,
                hue: state.hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: numberOfColors
            }
        }

    }
}