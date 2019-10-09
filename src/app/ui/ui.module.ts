import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  exports: [UiComponent, HeaderComponent, NavComponent, FooterComponent, RouterModule],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class UiModule {


 }

