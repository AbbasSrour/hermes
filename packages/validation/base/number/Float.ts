import {number} from "../types/Number";

export const FLOAT = 'FLOAT';

export function Float(value: unknown): boolean {
    return number(value) && !Number.isInteger(value);
}