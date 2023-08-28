export const FALSY = 'FALSY';


export type TFalsy = false | 0 | '' | null | undefined | 'undefined' | 'null';

export function falsy(value: unknown): value is TFalsy {
    return !value;
}