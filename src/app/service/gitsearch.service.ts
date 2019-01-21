import {Injectable} from '@angular/core' ;
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable(
    {providedIn:'root'}
)
export class GitsearchService{
    private username='LoiseMwarangu'
    constructor(private _http:HttpClient){
        console.log('Github service started')
    }
    getUser(){
        return this._http.get('https://api.github.com/users/)'+this.username)
        .map(res: Response) =>res.json();
    };    
