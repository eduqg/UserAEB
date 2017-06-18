import { Component, OnInit } from '@angular/core';
import { HTTPUserService } from './httpuser.service';

@Component({
  selector: 'app-httpuser',
  templateUrl: './httpuser.component.html',
  styleUrls: ['./httpuser.component.css']
})
export class HttpuserComponent {

    postData: string;
    getOneData: string;

    users = [];
    jsonUsers: string;

    constructor(private _httpService: HTTPUserService) {
    }

    onUserGet(){
        //Pass to data json in case of sucess
        //When is completed, () calls a function
        this._httpService.getCurrentUsers()
            .subscribe(
                resUserData => this.users = resUserData,
                error => alert(error),
                () => console.log("Finished")

            );

        this.jsonUsers = JSON.stringify(this.users);
    }

    onUserPost() {
        var username = (document.getElementById("newusername") as HTMLInputElement).value;
        var password = (document.getElementById("newuserpassword") as HTMLInputElement).value;
        var id = (document.getElementById("newuserid") as HTMLInputElement).value;

        const newUser = {username,password,id}
        this.users.push(newUser);

        this._httpService.postUserJSON(this.users)
            .subscribe(
                data => console.log(data),
                error => alert(error),
                () => console.log("Finished")

            );
    }

    onUserGetId() {
        this._httpService.getOneUser()
            .subscribe(
                data => this.getOneData = data,
                error => alert(error),
                () => console.log("Finished")

            );
    }

}
