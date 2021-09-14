import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'multilang',
    templateUrl: './multilang.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultilangComponent {}
