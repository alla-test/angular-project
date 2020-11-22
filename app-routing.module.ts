import { CourseComponent } from './course/course.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { StructureComponent } from './structure/structure.component';
import { ReasonsComponent } from './reasons/reasons.component';

const routes: Routes = [
  
  { path: 'homepage',
  component: HomeComponent
  },
  { path: 'aboutme',
  component: AboutmeComponent
  },
  { path: 'price',
  component: PriceComponent
  },
  { path: 'course',
  component: CourseComponent
  },
  { path: 'reasons',
  component: ReasonsComponent
  },
  { path: 'structure',
  component: StructureComponent
  },
  
  { path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
