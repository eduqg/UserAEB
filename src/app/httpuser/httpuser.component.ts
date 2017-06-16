import { Component, OnInit } from '@angular/core';
import { HTTPUserService } from './httpuser.service';

@Component({
  selector: 'app-httpuser',
  templateUrl: './httpuser.component.html',
  styleUrls: ['./httpuser.component.css']
})
export class HttpuserComponent {

    getData: string;
    postData: string;
    getOneData: string;

    constructor(private _httpService: HTTPUserService) {
    }

    onUserGet(){
        //Pass to data json in case of sucess
        //When is completed, () calls a function
        this._httpService.getCurrentUsers()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")

            );
    }

    onUserPost() {
        this._httpService.postUserJSON()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")

            );
    }

    onUserGetId() {
        this._httpService.getOneUser()
            .subscribe(
                data => this.getOneData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")

            );
    }

}
