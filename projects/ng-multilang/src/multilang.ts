type ArrayItem<T> = T extends (infer R)[]
    ? R
    : T extends readonly (infer R)[]
    ? R
    : never;

export type ExtractLangs<T> = ArrayItem<T>;

export const DefaultSupportedLangsArray = ['en'] as const;

export type DefaultSupportedLangs = ArrayItem<typeof DefaultSupportedLangsArray>;

export type CurrentLangFunc<T extends string> = () => T;

export type MultiLangString<T extends string> = Partial<Record<T, string>>;
