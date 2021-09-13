import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StaticComponent} from './modules/static/static.component';
import { MultilangComponent } from './modules/multilang/multilang.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: StaticComponent,
    },
    {
        path: 'lazy',
        loadChildren: () => import(`./modules/lazy/lazy.module`).then(m => m.LazyModule),
    },
    {
        path: 'multilang',
        component: MultilangComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
