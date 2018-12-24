import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, FormBuilder,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { BannerTopComponent } from './banner-top/banner-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SolicitudesComponent,
    SolicitudComponent,
    BannerTopComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'solicitud', component: SolicitudComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
