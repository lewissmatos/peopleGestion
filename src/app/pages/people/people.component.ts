import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleModel } from 'src/app/Models/peopleModel';
import { PeoplesServicesService } from '../../services/peoples-services.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: PeopleModel = new PeopleModel()  

  constructor(private ppService: PeoplesServicesService) {
   
  }

  ngOnInit(): void {
  }

  spin: boolean = false
  guardar(formData: NgForm) {

    if (formData.invalid) {
      Object.values(formData.controls).forEach(control => control.markAsTouched())
    }

    this.ppService.createPeople(this.people).subscribe(resp=>console.log(resp))

  }


}
