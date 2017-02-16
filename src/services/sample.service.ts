import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../config/constants';
import { Sample } from './interfaces/sample';

@Injectable()
export class SampleService {

    constructor(private http: Http) { }

    query(userQuery: string): Observable<Sample> {
        return this.http.get(AppConstants.SERVER + '/query/' + userQuery)
            .map(this.toSamples);
    }

    toSamples(response: Response): Sample {
        return response.json();
    }
}