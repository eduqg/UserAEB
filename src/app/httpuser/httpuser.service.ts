import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions }    from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HTTPUserService {

    private _url: string = "http://csf.aeb.gov.br/user"

    constructor(private _http: Http) { }

    //need to allow acess cors on chrome, see extension https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
    getCurrentUsers() {
        //Receive json and map to json
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }

    postUserJSON(listUsers) {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin','*');



        console.log("List: " + JSON.stringify(listUsers));
        return this._http.post(this._url, JSON.stringify(listUsers), headers)
            .map((response:Response) => response.json());


    }

    getOneUser() {
        var userid = (document.getElementById("userid") as HTMLInputElement).value;
        return this._http.get('http://csf.aeb.gov.br/user/'+userid)
            .map(resource => resource.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }


}