import { Component, OnInit } from '@angular/core';
import { PeopleModel } from 'src/app/Models/peopleModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  spin: boolean = true

  timeOut() {

    setTimeout(() => this.spin = false, 1700)
  }

  people: PeopleModel = new PeopleModel()
  public nivel: string = ''


  constructor() {
    if (this.people.nivel == true) {
      this.nivel = 'Bueno'
    } else {
      this.nivel = 'Malo'
    }
  }
  ngOnInit(): void {
    this.timeOut()
  }

}
