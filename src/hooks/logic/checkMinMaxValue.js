
export const checkMinMaxValue = (value, max, target) => {

    if (value >= 0 && value <= max) {
        value = target
    } else if (value > max) {
        value = max
    } else if (value < 0) {
        value = 0
    }

    return value
}