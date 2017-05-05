import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "caretakers",
  pure: false
})

export class Caretakers implements PipeTransform {
  transform(input: Animal[]){
    var totalCaretakers = 0;
      for (var i = 0; i < input.length; i++){
        totalCaretakers += input[i].caretakers;
    }
    return totalCaretakers;
}
}
