import {Injectable} from '@angular/core' ;
import {http,Headers} from '@angular/http';
import {map} from operator/axjs ;

@Injectable(
    {providedIn:'root'}
)
export class GitsearchService{
    private clientid='63803c21ae36ca102d8f';
    private secret='035207e594845697a248822218ac167e7735bb0b'
    private username='LoiseMwarangu';
    constructor(private http:HttpClient){
        console.log('Gitsearch service started')
    };
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
        pipe(

        )
    };    
