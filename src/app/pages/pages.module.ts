import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';

@NgModule({
  declarations: [
    PagesComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    MenupageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
