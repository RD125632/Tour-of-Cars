import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Car } from '../../../shared/car/car.ts';

@Injectable()
export class CarService {

  baseURL : string = "http://localhost:7001";

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    let car$ = this.http.get(`${this.baseURL}/car`, {headers: this.getHeaders()})
      .map(response => response.json());
      return car$;
  }

  setVote(car1:number, car2:number, winner:number) : Observable<Response> {
      let body = JSON.stringify({ "car1":car1,"car2":car2,"winner":winner});
      let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('x-id','1');
      let options = new RequestOptions({ headers: headers, method: "post" });

          console.log("CONSOLE");
      return this.http.post(`${this.baseURL}/vote`, body,options)
              .map(res => res.json())
              .catch(this.handleError);
  }

  private handleError (error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || ' error');
  }

  private getHeaders(){
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  return headers;
}

}
