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

  updatePeople(people: PeopleModel) {

    const peopleTemp: any = {
      ...people
    }

    delete peopleTemp.id;

    return this.http.put(`${this.url}/peoples/${people.id}.json`, peopleTemp)
  }

  getPeopleById(id: string) {
    
    return this.http.get(`${this.url}/peoples/${id}.json`)

  }

  getPeoples() {
    return this.http.get(`${this.url}/peoples.json`)
      .pipe(map (this.peopleArray))      
  }

  private peopleArray(peopleObj: object) {

    const ppArray: PeopleModel[] = []

    
   /*  Object.keys(peopleObj).forEach(key => {
      
      const people: PeopleModel = peopleObj[key]
      people.id = key

      ppArray.push(people)

    })
    if (peopleObj === null) {
      return []
    } else {
      
      return ppArray

    } */

  }
}
