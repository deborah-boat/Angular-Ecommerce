import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="handleButtonClick()">
      {{ label }}
    </button>
  `,
  styles: `` ,
})
export class PrimaryButton {
  @Input() label: string = '';

  @Output() btnClicked = new EventEmitter<void>();

  handleButtonClick() {
    this.btnClicked.emit();
    // Additional logic can be added here, such as emitting an event or calling a service
  }
}

