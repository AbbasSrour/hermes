import {number} from "../types/Number";


export const MAX = 'MAX';


export const Max = (value: unknown, max: number): boolean => {
    return number(value) && value <= max;
}