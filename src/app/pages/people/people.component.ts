import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PeopleModel } from 'src/app/Models/peopleModel';
import { PeoplesServicesService } from '../../services/peoples-services.service';
import Swal from "sweetalert2";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: PeopleModel = new PeopleModel()

  constructor(private ppService: PeoplesServicesService, private route: ActivatedRoute, private r: Router) {
    
  }

  ngOnInit(): void {

  }

  spin: boolean = false

  guardar(formData: NgForm) {

    if (formData.invalid) {
      Object.values(formData.controls).forEach(control => control.markAsTouched())
    }


    Swal.fire({
      title: 'Espere',
      text: 'Espere',
      allowOutsideClick: false
    })
    Swal.showLoading()

    let peticion: Observable<any>;

    if (this.people.id) {
      peticion = this.ppService.updatePeople(this.people)

    } else {
      peticion = this.ppService.createPeople(this.people)

    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.people.nombre,
        text: 'Guardado exitosamente!',
      })
    })
  }


}
