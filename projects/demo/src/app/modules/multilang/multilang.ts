import type {
    ExtractLangs,
    MultiLangString as LibMultiLangString,
} from '@toolstik/ng-multilang';

export const SupportedLangsArray = ['en', 'ru'] as const;

export type SupportedLangs = ExtractLangs<typeof SupportedLangsArray>;

export type MultiLangString = LibMultiLangString<SupportedLangs>;
