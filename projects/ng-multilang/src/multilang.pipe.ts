import { Pipe, PipeTransform } from "@angular/core";
import { DefaultSupportedLangs, MultiLangString } from "./multilang";
import { MultilangService } from './multilang.service';

@Pipe({
    name: 'multiLang',
    pure: false
})
export class MultilangPipe<T extends string = DefaultSupportedLangs> implements PipeTransform {

    constructor(private multilangService: MultilangService<T>) {
    }

    transform(title: MultiLangString<T>, defaultLang?: T): string {
        return this.multilangService.translate(title, defaultLang);
    }

}
