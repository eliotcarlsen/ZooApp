import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
    <div class="well" *ngIf="childSelectedAnimal">
    <h1>Edit Animal</h1>
      <h3>{{childSelectedAnimal.name}}</h3>
      <h4>{{childSelectedAnimal.species}}</h4>
      <hr>
    <div class="form-group">
      <label>Edit Species:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
    </div>
    <div class="form-group">
      <label>Edit Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div class="form-group">
      <label>Edit Age:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div class="form-group">
      <label>Edit Diet:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
    </div>
    <div class="form-group">
      <label>Edit Location:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
    </div>
    <div class="form-group">
      <label>Edit Caretakers:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
    </div>
    <div class="form-group">
      <label>Edit Sex:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
    </div>
    <div class="form-group">
      <label>Edit Likes:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
    </div>
    <div class="form-group">
      <label>Edit Dislikes:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
    </div>
      <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
    </div>
  `
})
export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
