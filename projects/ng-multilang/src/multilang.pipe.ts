import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {DefaultSupportedLangs, MultiLangString} from './multilang';
import type {MultilangService} from './multilang.service';

@Pipe({
    name: 'multiLang',
    pure: false,
})
export class MultilangPipe<T extends string = DefaultSupportedLangs>
    implements PipeTransform {
    constructor(private multilangService: MultilangService<T>) {}

    transform(title: MultiLangString<T>, defaultLang?: T): string {
        return this.multilangService.translate(title, defaultLang);
    }
}
