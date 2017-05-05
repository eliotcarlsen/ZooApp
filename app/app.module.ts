import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { AllAnimalComponent } from './all-animal.component';
import { NewAnimalComponent } from './new-animal.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AllAnimalComponent, NewAnimalComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
