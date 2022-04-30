import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { ContactanosComponent } from './componente/contactanos/contactanos.component';
import { FooterComponent } from './componente/footer/footer.component';
import { VideosComponent } from './componente/videos/videos.component';
import { InicioComponent } from './componente/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CarruselComponent,
    ContactanosComponent,
    FooterComponent,
    VideosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
