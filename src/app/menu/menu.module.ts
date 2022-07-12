import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing.module';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MenuRoutingModule,
    MatExpansionModule,

  ],
  declarations: [
    MenuComponent,
    ViewmenuComponent
  ],
})
export class MenuModule { }
