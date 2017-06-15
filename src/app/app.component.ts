import { Component } from '@angular/core';
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Manager AEB';

  private apiURL = 'http://csf.aeb.gov.br/user';

  data: any = {};

  constructor(private http: Http) {
    console.log(http);
    this.getData();
    console.log("1");
    this.getUsers();
    console.log("2");

  }

  getData() {
    return this.http.get(this.apiURL)
        .map((res: Response) => res.json())
  }

  getUsers() {
    this.getData().subscribe(data => {
        console.log(data);
    })
  }


}