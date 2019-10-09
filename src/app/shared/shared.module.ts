import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [TableauComponent, ButtonComponent],
  exports: [TableauComponent, ButtonComponent], // export pour que le composant soit dispo dans les autres modules (componentName --export)
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
