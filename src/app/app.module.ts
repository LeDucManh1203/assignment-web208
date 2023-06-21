import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotfoundComponent, CreateComponent, ListComponent, UpdateComponent, DetailComponent, AdminlayoutComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
