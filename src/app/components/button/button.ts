import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="bg-red-500 text-black w-full  px-5 py-2 rounded-xl shadow-md hover:" (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: `` ,
})
export class ButtonComponent {
  label = input('')

  btnClicked = output();

}

