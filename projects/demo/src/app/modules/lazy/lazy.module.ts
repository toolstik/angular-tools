import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

export const routes: Routes = [
    {
        path: '',
        component: LazyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [LazyComponent],
    exports: [LazyComponent],
})
export class LazyModule {}
