import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Zoo App</h1>
  <all-animal [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></all-animal>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  `
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises")
  ];
  addAnimal(newAnimal: Animal){
    this.masterAnimalList.push(newAnimal);
  }
  selectedAnimal = null;
  editAnimal(clickedAnimal){
    console.log(clickedAnimal);
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing(){
    this.selectedAnimal = null;
  }
}
