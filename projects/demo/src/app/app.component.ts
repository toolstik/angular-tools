import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLangsArray } from './modules/multilang/multilang';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    constructor(private translate: TranslateService) { }

    ngOnInit() {
        this.initTranslateService();
    }

    private initTranslateService() {
        this.translate.addLangs([...SupportedLangsArray]);
        this.translate.setDefaultLang(SupportedLangsArray[0]);
        this.translate.use(SupportedLangsArray[0]);
    }

}
