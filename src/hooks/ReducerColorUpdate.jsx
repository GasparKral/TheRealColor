import { generateRandomColor } from "./logic/generateRandomColor"

export const ReducerColor = (state, action) => {

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

    }
}