import {Injectable} from '@angular/core' ;
import {HttpClient,HttpParams} from '@angular/common/http';
import {http,Headers} from '@angular/http';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable(
    {providedIn:'root'}
    constructor(private http:HttpClient){};
)
export class GitsearchService{
    private username: string;
    client id= '63803c21ae36ca102d8f';
    client secret= '035207e594845697a248822218ac167e7735bb0b';   
    constructor(private _http:HttpClient){
        console.log('Gitsearch service started')
        this.username= 'LoiseMwarangu'
    }
    getUser(){

        return this.http.get<Apiresponse>('https://api.github.com/users/' + this.username +
         '?client_id' + this.clientid + '&client_secret=' + this.
        clientsecret).toPromise();
      }
       
      getgitsearchInfo() {
        interface Apiresponse {
          bio: string;
          name: string;
          location: string;
          followers: string;
          following: string;
          public_gists: string;
          public_repos: string;
          html_url: string;
          avatar_url: string;
          company: string;
          login: string;
          email: string;
          hireable: string;
        }

      getHubRepos() {
        interface Apiresponse {
         name: string;
         description: string;
        }
        interface Apiresponses extends Array<Apiresponse> {}
        return this.http.get<Apiresponses>('https://api.github.com/users/' + this.username +
         '/repos?client_id' + this.clientid + '&client_secret=' + this.
          clientsecret).toPromise();
      }
      updateHub(username: string) {
        this.username = username;
      }
    }
    