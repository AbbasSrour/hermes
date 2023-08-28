import {number} from "../types/Number";


export const MIN = 'MIN';

export const Min = (value: unknown, min: number): boolean => {
    return number(value) && value >= min;
}