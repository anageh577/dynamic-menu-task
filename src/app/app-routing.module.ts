import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewmenuComponent } from './menu/viewmenu/viewmenu.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'asd',
    component: ViewmenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
