import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'all-animal',
  template:`
  <div class = "row">
    <div class = "col-md-12">
      <div class="form-group">
        <div class="well">
          <label>Filter Animals By Age</label>
          <select (change)="onChange($event.target.value)">
            <option value="allAnimals">All Animals</option>
            <option value="under2">Animals Under 2 years old</option>
            <option value="over2">Animals Over 2 years old</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="well">
  <label>Filter Animals By Species:</label>
  <input [(ngModel)]="input" />
  <h4>Caretakers Needed By Species: {{caretakersNeeded(childAnimalList | species:input)}}</h4>
  </div>
    <div class="col-md-4" *ngFor="let currentAnimal of childAnimalList | age:filterByAge | species:input">
    <div class="well">
      <h3>Species: {{currentAnimal.species}}</h3>
      <h4><strong>Name:</strong> {{currentAnimal.name}}</h4>
      <p><strong>Age:</strong> {{currentAnimal.age}}</p>
      <p><strong>Diet:</strong> {{currentAnimal.diet}}</p>
      <p><strong>Location:</strong> {{currentAnimal.location}}</p>
      <p><strong>Caretakers needed:</strong> {{currentAnimal.caretakers}}</p>
      <p><strong>Sex:</strong> {{currentAnimal.sex}}</p>
      <p><strong>Likes:</strong> {{currentAnimal.likes}}</p>
      <p><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</p>
      <p><strong>Date admitted:</strong> {{currentAnimal.date}}</p>
      <button class="btn btn-primary btn-xs" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
    </div>
  </div>
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
  caretakersNeeded(childAnimalList){
    var totalCaretakers = 0;
    for (var i = 0; i < childAnimalList.length; i++){
      totalCaretakers += parseInt(childAnimalList[i].caretakers);
    }
    return totalCaretakers;
  }
}
