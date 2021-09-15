import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { CurrentLangFunc } from './multilang';
import { DefaultSupportedLangsArray } from './multilang';
import { MultilangPipe } from './multilang.pipe';
import { MultilangService } from './multilang.service';
import { MULTILANG_CURRENT_LANG_TOKEN, MULTILANG_SUPPORTED_LANGS_TOKEN } from './tokens';

export type MultiLangModuleConfig<T extends string> = {
    supportedLangs?: T[];
    currentLang?: {
        inject?: any[];
        factory: (...args: any[]) => CurrentLangFunc<T>;
    };
};

@NgModule({
    declarations: [MultilangPipe],
    exports: [MultilangPipe],
    providers: [MultilangService],
})
export class MultiLangModule {
    static forRoot<T extends string>(
        config: MultiLangModuleConfig<T>,
    ): ModuleWithProviders<MultiLangModule> {
        config = {
            supportedLangs:
                config?.supportedLangs || ([...DefaultSupportedLangsArray] as T[]),
            currentLang: {
                inject: config?.currentLang?.inject || [],
                factory:
                    config?.currentLang?.factory ||
                    (() => () => DefaultSupportedLangsArray[0] as T),
            },
        };

        return {
            ngModule: MultiLangModule,
            providers: [
                {
                    provide: MULTILANG_CURRENT_LANG_TOKEN,
                    deps: config.currentLang!.inject,
                    useFactory: config.currentLang!.factory,
                },
                {
                    provide: MULTILANG_SUPPORTED_LANGS_TOKEN,
                    useValue: config.supportedLangs!,
                },
            ],
        };
    }
}
