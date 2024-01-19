
export const ReducerControls = (state, action) => {

    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {

        case 'CHANGE_HUE': {
            const { hue } = actionPayload
            return {
                hue: hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_SATURATION': {
            const { saturation } = actionPayload
            return {
                hue: state.hue,
                saturation: saturation,
                lightness: state.lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_LIGHTNESS': {
            const { lightness } = actionPayload
            return {
                hue: state.hue,
                saturation: state.saturation,
                lightness: lightness,
                numberOfColors: state.numberOfColors
            }
        }
        case 'CHANGE_NUMBER_OF_COLORS': {
            const { numberOfColors } = actionPayload
            return {
                hue: state.hue,
                saturation: state.saturation,
                lightness: state.lightness,
                numberOfColors: numberOfColors
            }
        }
    }

}