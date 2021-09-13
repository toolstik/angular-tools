import { NgModule } from '@angular/core';
import { MultilangComponent } from './multilang.component';
import { MultiLangModule as LibMultiLangModule, } from '@toolstik/ng-multilang';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SupportedLangsArray } from './multilang';

@NgModule(
    {
        imports: [
            TranslateModule.forRoot(),
            LibMultiLangModule.forRoot({
                supportedLangs: [...SupportedLangsArray],
                currentLang: {
                    inject: [TranslateService],
                    factory: (translate: TranslateService) => () => translate.currentLang,
                }
            }),
        ],
        declarations: [MultilangComponent],
        exports: [MultilangComponent],
    })
export class MultilangModule { }
