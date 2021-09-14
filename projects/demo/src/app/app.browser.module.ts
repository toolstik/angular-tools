import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MultiLangModule as LibMultiLangModule} from '@toolstik/ng-multilang';
import {TranslateService} from '@ngx-translate/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {MultilangModule} from './modules/multilang/multilang.module';
import {StaticModule} from './modules/static/static.module';
import {SupportedLangsArray} from './modules/multilang/multilang';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'demo',
        }),
        LibMultiLangModule.forRoot({
            supportedLangs: [...SupportedLangsArray],
            currentLang: {
                inject: [TranslateService],
                factory: (translate: TranslateService) => () => translate.currentLang,
            },
        }),
        AppRoutingModule,
        StaticModule,
        MultilangModule,
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class AppBrowserModule {}
