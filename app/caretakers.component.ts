import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: "caretakers",
  template: `
    <h4>Total Caretakers Needed For Today: {{caretakersNeeded(childAnimalList)}}</h4>
    <label>Species:</label>
    <input [(ngModel)]="input" />
    <h4>Caretakers Needed By Species: {{caretakersNeeded(childAnimalList | species:input)}}
    <br>

  `
})

export class CaretakersComponent {
  @Input() childAnimalList: Animal[];
  @Output() inputEmit = new EventEmitter();

  caretakersNeeded(childAnimalList){
    var totalCaretakers = 0;
    for (var i = 0; i < childAnimalList.length; i++){
      totalCaretakers += parseInt(childAnimalList[i].caretakers);
    }
    return totalCaretakers;
  }
  
}
