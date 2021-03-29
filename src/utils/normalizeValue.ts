const normalizeValue = (val: number | string, max: number = 100, min: number = 0): number => {
    val = typeof val === 'string' ? parseInt(val) : val;
    return (val - min) / (max - min);
}

export {
    normalizeValue
}