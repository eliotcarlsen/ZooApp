import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'all-animal',
  template:`
  <div class = "row">
    <div class = "col-md-12">
      <div class="form-group">
        <label>Filter Animals By Age</label>
        <select (change)="onChange($event.target.value)">
          <option value="allAnimals">All Animals</option>
          <option value="under2">Animals Under 2 years old</option>
          <option value="over2">Animals Over 2 years old</option>
        </select>
      </div>
      <h6>Caretakers Needed:</h6>
    </div>
  </div>
  <div class="col-md-4" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
    <h3>{{currentAnimal.species}}</h3>
    <h4>{{currentAnimal.name}}</h4>
    <p>{{currentAnimal.age}}</p>
    <p>{{currentAnimal.diet}}</p>
    <p>{{currentAnimal.location}}</p>
    <p>{{currentAnimal.caretakers}}</p>
    <p>{{currentAnimal.sex}}</p>
    <p>{{currentAnimal.likes}}</p>
    <p>{{currentAnimal.dislikes}}</p>
    <p>{{currentAnimal.date}}</p>
    <button class="btn btn-primary btn-xs" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
  `
})

export class AllAnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }
  filterByAge = "allAnimals";
  onChange(optionChosen){
    this.filterByAge = optionChosen;
  }
}
