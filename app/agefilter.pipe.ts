import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class Age implements PipeTransform {
  transform(input: Animal[], desiredAge){
    var under2: Animal[] = [];
    var over2: Animal[] = [];
    var all: Animal[] = [];
    if(desiredAge === "under2"){
      for (var i = 0; i < input.length; i++){
        if(input[i].age <= 2) {
          under2.push(input[i]);
        }
      }
      return under2;
    } else if(desiredAge === "over2"){
      for(var i=0; i<input.length; i++){
        if(input[i].age > 2){
          over2.push(input[i]);
        }
      }
      return over2;
    } else {
      return input;
    }
  }
}
