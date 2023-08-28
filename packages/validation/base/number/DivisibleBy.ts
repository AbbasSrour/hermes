export const DIVISIBLE_BY = 'DIVISIBLE_BY';

export function DivisibleBy(value: unknown, divisor: unknown): boolean {
    if (typeof value !== 'number') return false;
    if (typeof divisor !== 'number') return false;
    return value % divisor === 0;
}