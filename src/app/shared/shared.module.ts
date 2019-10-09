import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { ButtonComponent } from './components/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';



@NgModule({
  declarations: [TableauComponent, ButtonComponent, TotalPipe, StateDirective, TableauDarkComponent],
  // export pour que le composant soit dispo dans les autres modules (componentName --export)
  exports: [TableauComponent, ButtonComponent, TotalPipe, StateDirective, TableauDarkComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
