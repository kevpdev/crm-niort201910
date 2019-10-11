import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from '../templates/templates.module';
import { ActionsComponent } from './components/actions/actions.component';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauComponent, ButtonComponent, TotalPipe, StateDirective, TableauDarkComponent, ActionsComponent],
  // export pour que le composant soit dispo dans les autres modules (componentName --export)
  exports: [TableauComponent, ButtonComponent, TotalPipe, StateDirective, TableauDarkComponent, TemplatesModule, ActionsComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    FontAwesomeModule

  ]
})
export class SharedModule { }
