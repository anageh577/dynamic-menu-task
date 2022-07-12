import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: ViewmenuComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule { }
