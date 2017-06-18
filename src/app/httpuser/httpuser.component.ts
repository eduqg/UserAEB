import { Component, OnInit } from '@angular/core';
import { HTTPUserService } from './httpuser.service';

import { User } from './user';

@Component({
  selector: 'app-httpuser',
  templateUrl: './httpuser.component.html',
  styleUrls: ['./httpuser.component.css']
})
export class HttpuserComponent {

    postData: string;
    getOneData: string;

    users = [];

    user: User;

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
    }

    //cretes user and post it on server
    onUserPost(): void {
        var username = (document.getElementById("newusername") as HTMLInputElement).value;
        var password = (document.getElementById("newuserpassword") as HTMLInputElement).value;

        //creates new user based on fields
        const newUser = new User();
        newUser.username = username;
        newUser.password = password;

        this._httpService.postUserJSON(newUser)
            .subscribe(
                postData => console.log(postData),
                error => alert(error),
                () => console.log("Finished")

            );
    }

    //takes one user
    onUserGetId(): void {
        this._httpService.getOneUser()
            .subscribe(
                data => this.getOneData = data,
                error => alert(error),
                () => console.log("Finished")

            );
    }

    //delete one user
    onUserDelete(): void {
        this._httpService.deleteOneUser()
            .subscribe(
                data => this.getOneData = data,
                error => alert(error),
                () => console.log("Finished")
            );
    }



}
