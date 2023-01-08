import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { MenuComponent } from './sections/menu/menu.component';

const sections = [
  HeaderComponent,
  FooterComponent,
  MenuComponent
];

@NgModule({
  declarations: [
    sections
  ],
  imports: [
    CommonModule
  ],
  exports: [
    sections
  ]
})
export class SharedModule { }
