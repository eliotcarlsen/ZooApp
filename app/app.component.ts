import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="jumbotron">
    <h1><strong>Zoo App</strong></h1>
  </div>
    <div class="row">
      <div class="col-md-9">
        <all-animal [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></all-animal>
      </div>
      <div class="col-md-3">
      <caretakers [childAnimalList]="masterAnimalList"></caretakers>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>

    </div>
  </div>
  `
})
export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
    new Animal("House Cat", "Meow", 4, "Carnivore", "Feline Wing", 1, "Female", "Purring", "Getting scared"),
    new Animal("Dog", "Ruff", 1, "Carnivore", "Mutt St.", 2, "Male", "Pets", "Getting wet")
  ];
  addAnimal(newAnimal: Animal){
    this.masterAnimalList.push(newAnimal);
  }
  selectedAnimal = null;
  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing(){
    this.selectedAnimal = null;
  }
}
