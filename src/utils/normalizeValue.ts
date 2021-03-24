const normalizeValue = (val: number, max: number, min: number): number => {
    return (val - min) / (max - min);
}

export {
    normalizeValue
}