import {number} from "../types/Number";

export const POSITIVE = 'POSITIVE';


export const Positive = (value: unknown): boolean => {
    return number(value) && value > 0;
}