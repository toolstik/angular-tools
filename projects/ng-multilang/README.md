# Polymorpheus

[![npm version](https://img.shields.io/npm/v/@toolstik/ng-multilang.svg)](https://npmjs.com/package/@toolstik/ng-multilang)
[![Coverage Status](https://coveralls.io/repos/github/toolstik/angular-tools/badge.svg?branch=master)](https://coveralls.io/github/toolstik/angular-tools?branch=master)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/TinkoffCreditSystems/angular-open-source-starter)

**ng-multilang** is a tiny library to work with multilingual strings like:
```js
{
    en: 'Hello World!',
    ru: 'Привет Мир!'
}
```

## What does it do?

This library contains types and Angular module to work with such kind of data

## How to use it?

```ts
import {NgModule} from '@angular/core';
import {MultiLangModule} from '@toolstik/ng-multilang';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

export const SupportedLangsArray = ['en', 'ru'] as const;

@NgModule({
    imports: [
        TranslateModule.forRoot(),
        MultiLangModule.forRoot({
            supportedLangs: [...SupportedLangsArray],
            currentLang: {
                inject: [TranslateService],
                factory: (translate: TranslateService) => () => translate.currentLang,
            },
        }),
    ],
})
export class AppModule {}
```
