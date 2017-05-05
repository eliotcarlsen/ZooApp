import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'all-animal',
  template:`
  <div *ngFor="let currentAnimal of childAnimalList">
    <h3>{{currentAnimal.species}}</h3>
    <h4>{{currentAnimal.name}}</h4>
    <p>{{currentAnimal.age}}</p>
    <p>{{currentAnimal.diet}}</p>
    <p>{{currentAnimal.location}}</p>
    <p>{{currentAnimal.caretakers}}</p>
    <p>{{currentAnimal.sex}}</p>
    <p>{{currentAnimal.likes}}</p>
    <p>{{currentAnimal.dislikes}}</p>
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
  `
})

export class AllAnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }
}
