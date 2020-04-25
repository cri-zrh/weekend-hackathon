import { WeekplannerComponent } from './weekplanner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatButtonComponent } from './cat-button/cat-button.component';
import {CatsService} from "./cats.service";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { TableCardComponent } from './components/table-card/table-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WeekplannerComponent,
    CatButtonComponent,
    FooterComponent,
    HeaderComponent,
    TableCardComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    CatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
