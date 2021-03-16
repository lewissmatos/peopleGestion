import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'people/:new', component: PeopleComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports:
    [
      RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
