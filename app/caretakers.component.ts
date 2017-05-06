import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: "caretakers",
  template: `
  <div class="well">
    <h4>Total Caretakers Needed For Today: {{caretakersNeeded(childAnimalList)}}</h4>
  </div>

  `
})

export class CaretakersComponent {
  @Input() childAnimalList: Animal[];
  @Output() inputSent = new EventEmitter();

  caretakersNeeded(childAnimalList){
    var totalCaretakers = 0;
    for (var i = 0; i < childAnimalList.length; i++){
      totalCaretakers += parseInt(childAnimalList[i].caretakers);
    }
    return totalCaretakers;
  }

}
