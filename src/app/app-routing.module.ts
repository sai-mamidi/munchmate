import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'viewmenu/:rId',component:ViewMenuComponent,pathMatch:'full'},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
