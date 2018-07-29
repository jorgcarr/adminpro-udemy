import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeadersComponent } from './headers/headers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
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
