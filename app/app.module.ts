import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { AllAnimalComponent } from './all-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { Age } from './agefilter.pipe';
import { CaretakersComponent } from './caretakers.component';
import { SpeciesFilter } from './species.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AllAnimalComponent, NewAnimalComponent, EditAnimalComponent, Age, CaretakersComponent, SpeciesFilter ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
