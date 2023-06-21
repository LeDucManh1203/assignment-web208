import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
const routes: Routes = [
  {path: 'admin', component: AdminlayoutComponent, children: [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ListComponent},
    {path: 'products/create', component: CreateComponent},
    {path: 'products/update/:id', component: UpdateComponent},
    {path: 'products/detail/:id', component: DetailComponent},
  ]}
  ,
  {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
