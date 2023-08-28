export const STRING = 'STRING';

export function string(value: unknown): value is string {
    const type = typeof value;
    return type === 'string' || value instanceof String;
}