import {Injectable} from '@angular/core' ;
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable(
    {providedIn:'root'}
)
export class GitsearchService{
    private username='LoiseMwarangu'
    constructor(private _http:HttpClient){
        console.log('Github service started')
    }
    getUser(){
        return this._http.get('https://apigithub.com/users/)'+this.username)
        .map(res => res.json());
    }
}