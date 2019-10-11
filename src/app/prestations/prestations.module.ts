import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
// alt +shift+o => import alphabet + clean



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent, PageEditPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
