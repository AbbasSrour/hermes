import {string} from "../types/String";
import {merge} from "../utils/merge";

export const CONTAINS = 'CONTAINS';

export type ContainsOptions = {
    occurrences: number;
    ignoreCase: boolean;
}

const defaultOptions: ContainsOptions = {
    occurrences: 1,
    ignoreCase: false
}

export function contains(value: unknown, check: string, options: Partial<ContainsOptions> = {}): boolean {
    const opts = merge(options, defaultOptions);
    const {occurrences, ignoreCase} = opts;

    if (!string(value)) {
        return false;
    }

    if (ignoreCase) {
        const lowerCaseValue = value.toLowerCase();
        const lowerCaseCheck = check.toLowerCase();

        return lowerCaseValue.split(lowerCaseCheck).length - 1 >= occurrences;
    }

    return value.split(check).length - 1 >= occurrences;
}