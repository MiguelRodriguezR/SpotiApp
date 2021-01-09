import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  SPOTIFY_TOKEN;
  authLoaded = false;


  constructor(private http: HttpClient) {
    this.getToken();
  }

  getToken() {
    this.http.get('https://migue-spotiapp.herokuapp.com/spotify').subscribe((token: any) => {
      this.SPOTIFY_TOKEN = token.access_token;
      this.authLoaded = true;
    });
  }
}
