import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { AllAnimalComponent } from './all-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { EditAnimalComponent } from './edit-animal.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AllAnimalComponent, NewAnimalComponent, EditAnimalComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
