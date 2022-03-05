import changeCase from 'change-object-case';

changeCase.options = { recursive: true, arrayRecursive: true };

export const objectKeysToCamel = (item) => changeCase.toCamel(item);

export const stringToCamel = (str) => changeCase.camelCase(str);

export const objectKeysToKebab = (item) => changeCase.toParam(item);

export const stringToKebab = (str) => changeCase.paramCase(str);

export const stringToSnake = (str) => changeCase.snakeCase(str);
