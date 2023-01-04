import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_ABOUT, ROUTING_CONTACTS, ROUTING_DEMO, ROUTING_GALERIES, ROUTING_WEDDING } from './shared/consts/consts';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: ROUTING_DEMO,
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
    },
    {
        path: ROUTING_GALERIES,
        loadChildren: () => import('./modules/galeries/galeries.module').then(m => m.GaleriesModule)
    },
    {
        path: ROUTING_CONTACTS,
        loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path: ROUTING_ABOUT,
        loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule)
    },
    {
        path: ROUTING_WEDDING,
        loadChildren: () => import('./modules/wedding/wedding.module').then(m => m.WeddingModule)
    },
    {
        path: '**',
        loadChildren: () => import('./modules/errors/errors.module').then(m => m.ErrorsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
