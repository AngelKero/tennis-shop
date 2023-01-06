import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';

const sections = [
  HeaderComponent,
  FooterComponent
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
