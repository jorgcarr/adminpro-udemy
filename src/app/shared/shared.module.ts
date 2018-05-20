import { NgModule } from '@angular/core';

import { HeadersComponent } from './headers/headers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations: [
        NopagefoundComponent,
        HeadersComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        NopagefoundComponent,
        HeadersComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})
export class SharedModule { }
