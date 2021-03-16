import { Component, OnInit } from '@angular/core';
import { PeopleModel } from 'src/app/Models/peopleModel';
import { PeoplesServicesService } from '../../services/peoples-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: PeopleModel = new PeopleModel()
  public nivel: string = ''

  constructor(private ppService: PeoplesServicesService) {
    if (this.people.nivel == true) {
      this.nivel = 'Bueno'
    } else {
      this.nivel = 'Malo'
    }

  }
  peoples: PeopleModel[] = []
  ngOnInit(): void {
    this.ppService.getPeoples().subscribe(resp => {
      console.log(resp)
      this.peoples = resp
    })

  }

}
