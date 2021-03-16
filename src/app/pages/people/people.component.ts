import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleModel } from 'src/app/Models/peopleModel';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  people: PeopleModel = new PeopleModel()

  constructor() { }

  ngOnInit(): void {
  }

  guardar(formData: NgForm) {
    if (formData.invalid) {
      Object.values(formData.controls).forEach(control => control.markAsTouched())
    }
    console.log(formData)
    console.log(this.people)
  }


}
