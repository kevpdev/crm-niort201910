import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
