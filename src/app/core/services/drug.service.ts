import { IDrug } from '../../../shared/models/drug';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DrugService {
    constructor(private http: Http){

    }

    public getDrugsByCategory(category: string, subCategory?: string): Observable<IDrug[]>{
        let url = `/api/durgs/${category}`;
        if(!!subCategory) url += `/${subCategory}`;
        console.log(url);
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    // public getCatalogueSuggestionsByUser(userId: string): Observable<IDrug[]>{
        
    // }

    private handleError(error){
        console.error(error);
        return Observable.throw(error);
    }

}