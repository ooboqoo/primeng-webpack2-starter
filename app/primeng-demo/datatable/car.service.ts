import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car }            from './car';

@Injectable()
export class CarService {

  constructor(private http: Http) {  }

  getCarsSmall() {
    return this.http.get('/assets/primeng/cars/cars-small.json')
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  getCarsMedium() {
    return this.http.get('/assets/primeng/cars/cars-medium.json')
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
