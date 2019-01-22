import {Injectable} from '@angular/core' ;
import {HttpClient,HttpParams} from '@angular/common/http';
import {http,Headers} from '@angular/http';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {pipe} from ''

@Injectable(
    {providedIn:'root'});

export class GitsearchService{
    private username: string;
    private clientid= '63803c21ae36ca102d8f';
    private clientsecret= '035207e594845697a248822218ac167e7735bb0b';   
    constructor(private _http:HttpClient){
        console.log('Gitsearch service started');
        this.username= 'LoiseMwarangu';
    }
    getUser(){
        return this.http.get("https://api.github.com/users/" + this.username +
         '?client_id' + this.clientid + '&client_secret=' + this.
        clientsecret).toPromise()
        .pipe(
         map(result => result);
        )
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
      updateGitsearch(username: string) {
        this.username = username;
      }
    }
    