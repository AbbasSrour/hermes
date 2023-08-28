export const NULLISH = 'NULLISH';


export type TNullish = null | undefined;

export function nullish(value: unknown): value is TNullish {
    return value === null || value === undefined;
}