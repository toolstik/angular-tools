import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {MultilangComponent} from './multilang.component';
import {MultiLangModule as LibMultiLangModule} from '../../../../../ng-multilang/src/public-api';

@NgModule({
    imports: [TranslateModule.forRoot(), LibMultiLangModule],
    declarations: [MultilangComponent],
    exports: [MultilangComponent],
})
export class MultilangModule {}
