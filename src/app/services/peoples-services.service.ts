import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { PeopleModel } from '../Models/peopleModel';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PeoplesServicesService {

  private url: string = 'https://gestor-de-personas-default-rtdb.firebaseio.com'

  constructor(private http: HttpClient) { }

  createPeople(people: PeopleModel) {
    return this.http.post(`${this.url}/peoples.json`, people).pipe(
      map((resp:any) => {
        people.id = resp.name
        return people
      })
    )
  }
}
