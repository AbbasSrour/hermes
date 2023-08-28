export const INTEGER = 'INTEGER';

export function Integer(val: unknown): boolean {
    return typeof val === 'number' && Number.isInteger(val);
}