import {Injectable} from '@angular/core' ;
import {http,Headers} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable(
    {providedIn:'root'}
)
export class GitsearchService{
    client id=
    
    private username='LoiseMwarangu';
    constructor(private _http:HttpClient){
        console.log('Gitsearch service started')
    }
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username){
        .pipe(
        map(res =>res.json());
        )
        }
    };    
