import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PriceComponent } from './price/price.component';
import { CourseComponent } from './course/course.component';
import { StructureComponent } from './structure/structure.component';
import { ReasonsComponent } from './reasons/reasons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    PriceComponent,
    CourseComponent,
    StructureComponent,
    ReasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
