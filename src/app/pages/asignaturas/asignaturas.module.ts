import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasPageRoutingModule } from './asignaturas-routing.module';

import { AsignaturasPage } from './asignaturas.page';
import { AsignaturaCardsComponent } from 'src/app/componentes/asignatura-cards/asignatura-cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasPageRoutingModule
  ],
  declarations: [AsignaturasPage, AsignaturaCardsComponent]
})
export class AsignaturasPageModule {}
