import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() isMenuOpen: boolean = false;

  @Output() stateChange = new EventEmitter<void>();

  close() {
    this.isMenuOpen = !this.isMenuOpen;
    this.stateChange.emit();
  }

}
