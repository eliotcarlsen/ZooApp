import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "species",
  pure: false
})

export class SpeciesFilter implements PipeTransform {
  transform(masterAnimalList: any, inputSpecies: any): any {
      if (inputSpecies === undefined) return masterAnimalList;
      return masterAnimalList.filter(function(animal){
        return animal.species.toLowerCase().includes(inputSpecies.toLowerCase());
  })
  }
}
