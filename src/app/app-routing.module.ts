import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarraComponent } from './componente/barra/barra.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { ContactanosComponent } from './componente/contactanos/contactanos.component';
import { FooterComponent } from './componente/footer/footer.component';
import { VideosComponent } from './componente/videos/videos.component';
import { InicioComponent } from './componente/inicio/inicio.component';

const routes: Routes = [
  {path: 'barra', component:BarraComponent},
  {path: 'carrusel', component: CarruselComponent},
  {path: 'contacto', component: ContactanosComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'videos', component: VideosComponent},
  {path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
