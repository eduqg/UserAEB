import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions }    from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/map';

@Injectable()
export class HTTPUserService {

    //Adress to web service
    private _url: string = "http://csf.aeb.gov.br/user"

    constructor(private _http: Http) {
    }

    //takes every user on server
    getCurrentUsers() {
        //Receive users
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }

    //take one user with specified id
    getOneUser() {
        var userid = (document.getElementById("userid") as HTMLInputElement).value;
        return this._http.get('http://csf.aeb.gov.br/user/'+userid)
            .map(resource => resource.json());
    }

    //adds new user on server
    postUserJSON(newUser) {

        //adds Headers
        var headers = new Headers();

        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Headers', 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token');
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Methods', '*');

        var options = new RequestOptions(headers);

        console.log("newUser: " + JSON.stringify(newUser));
        return this._http.post(this._url, JSON.stringify(newUser), options)
            .map((response:Response) => response.json());


    }

    //method to delete one user
    deleteOneUser() {
        //takes selected user to delete
        var userid = (document.getElementById("removeid") as HTMLInputElement).value;
        return this._http.delete('http://csf.aeb.gov.br/user/'+userid)
            .map(resource => resource.json());
    }

    //update on user based on id
    updateUser(id: any, user: User) {
        var jsonUser = JSON.stringify(user);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin','*');
        var options = new RequestOptions({ headers: headers });

        return this._http.put(this._url + '/' + id, jsonUser, options)
            .map(res => res.json());
    }

}