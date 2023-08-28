export const NEGATIVE = 'NEGATIVE';

export function Negative(val: unknown): boolean {
    return typeof val === 'number' && val < 0;
}