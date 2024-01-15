import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
  @Input() items: any[] = [];
  @Output() itemsChange = new EventEmitter<any>();

  // Funcion para seleccionar un item del dropdown
  seleccionarItem(event: Event) {
    const target = event.target as EventTarget & { value: string };
    const value = target.value;
    this.itemsChange.emit(value);
  }
}