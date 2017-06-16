import { Injectable } from '@angular/core';
import { Http, Headers, Response }    from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HTTPUserService {
    constructor(private _http: Http) {
    }

    //need to allow acess cors on chrome, see extension https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
    getCurrentUsers() {
        return this._http.get('http://csf.aeb.gov.br/user')
            .map(resource => resource.json());
    }

    postUserJSON() {
        /*
        return this._http.post('http://csf.aeb.gov.br/user', {username:'abc',password:'123',id:30})
                  .map((response:Response) => response.json());

        */
    }


}