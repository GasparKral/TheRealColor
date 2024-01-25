export const clampValue = (inputValue, maxValue, targetValue) => {
    if (inputValue >= 0 && inputValue <= maxValue) {
        return targetValue;
    } else if (inputValue > maxValue) {
        return maxValue;
    } else {
        return 0;
    }
}