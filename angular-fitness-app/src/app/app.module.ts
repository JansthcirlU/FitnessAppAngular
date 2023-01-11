import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ShortenPipe } from './pipes/shorten';
import { EquipmentModule } from './equipment/equipment.module';
import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutPlansModule } from './workout-plans/workout-plans.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EquipmentModule,
    ExercisesModule,
    WorkoutPlansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
