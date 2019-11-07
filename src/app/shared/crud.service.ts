import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(this.config.urlAddress, route), body, this.generateHeaders());
  }

  public read(route: string) {
    return this.http.get(this.createCompleteRoute(this.config.urlAddress, route));
  }
 
  public update(route: string, body){
    return this.http.put(this.createCompleteRoute(this.config.urlAddress, route), body, this.generateHeaders());
  }
 
  public delete(route: string){
    return this.http.delete(this.createCompleteRoute(this.config.urlAddress, route));
  }

  public login(username, password) {
    return this.create('login', {username, password});
  }

  private createCompleteRoute(envAddress: string, route: string) {
    return `${envAddress}/${route}`;
  }    

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }    

  }

}
