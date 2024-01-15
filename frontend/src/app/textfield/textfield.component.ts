import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.css'
})
export class TextfieldComponent {
  @Output() messageEvent = new EventEmitter<string>();
  message: string = "";

  // Funcion para enviar el mensaje
  sendMessage() {
    this.messageEvent.emit(this.message);
    this.message = "";
  }
}
