export type TNumberOptions = {
    allowNaN?: boolean;
    allowInfinity?: boolean;
    maxDecimalPlaces?: number;
}

export function number(value: unknown, options: TNumberOptions = {
    allowNaN: false,
    allowInfinity: false,
}): value is number {
    if (typeof value !== 'number') return false;
    if (options.allowNaN === false && isNaN(value)) return false;
    if (options.allowInfinity === false && !isFinite(value)) return false;
    if (options.maxDecimalPlaces !== undefined) {
        let decimalPlaces = 0;
        if (value % 1 !== 0) {
            decimalPlaces = value.toString().split('.')[1].length;
        }
        return decimalPlaces < options.maxDecimalPlaces
    }
    return true;
}