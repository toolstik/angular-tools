import { Inject, Injectable } from '@angular/core';
import * as _ from 'lodash';
import type {
    CurrentLangFunc,
    DefaultSupportedLangs,
    MultiLangString,
} from './multilang';
import { MULTILANG_CURRENT_LANG_TOKEN, MULTILANG_SUPPORTED_LANGS_TOKEN } from './tokens';

@Injectable()
export class MultilangService<T extends string = DefaultSupportedLangs> {
    constructor(
        @Inject(MULTILANG_CURRENT_LANG_TOKEN) private currentLang: CurrentLangFunc<T>,
        @Inject(MULTILANG_SUPPORTED_LANGS_TOKEN) private supportedLangs: T[],
    ) {}

    translate(value: MultiLangString<T> | string, defaultLang?: T): string {
        if (value == null) {
            return '';
        }

        if (typeof value !== 'object') {
            return `${value}`;
        }

        if (!defaultLang) {
            [defaultLang] = this.supportedLangs;
        }

        const currentLang = this.currentLang();
        const currentOrDefault = value[currentLang] || value[defaultLang];

        if (currentOrDefault) {
            return currentOrDefault!;
        }

        // take the first language we meet
        for (const lang of this.supportedLangs) {
            const result = value[lang];

            if (typeof result === 'string') {
                return result;
            }
        }

        return '';
    }

    isMultiLangString(input: any): input is MultiLangString<T> {
        if (typeof input !== 'object') {
            return false;
        }

        const supported = new Set<string>(this.supportedLangs);
        // has only supported langs with string values as a field
        for (const key in input) {
            if (!supported.has(key)) {
                return false;
            }

            const value = input[key];
            if (value !== null && value !== undefined && typeof value !== 'string') {
                return false;
            }
        }

        return true;
    }

    isStringOrMultilang(input: any): input is string | MultiLangString<T> {
        return typeof input === 'string' || this.isMultiLangString(input);
    }

    isMultiLangStringEmpty(input: MultiLangString<T>): boolean {
        if (!input) {
            return true;
        }

        for (const lang of this.supportedLangs) {
            if (input[lang]) {
                return false;
            }
        }

        return true;
    }

    merge(
        merger: (value: string, srcValue: string, key?: T) => string,
        ...args: (string | MultiLangString<T>)[]
    ): MultiLangString<T> {
        return args
            .map(i => {
                if (typeof i === 'string') {
                    const val = i;
                    return this.supportedLangs.reduce((r, key) => {
                        r[key] = val;
                        return r;
                    }, {} as MultiLangString<T>);
                }

                return i;
            })
            .reduce((res, cur) => _.mergeWith(res, cur, merger));
    }

    concat(...args: (string | MultiLangString<T>)[]): MultiLangString<T> {
        return this.merge(
            (value, srcValue) => `${value ?? ''}${srcValue ?? ''}`,
            ...args,
        );
    }
}
