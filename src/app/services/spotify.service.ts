import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SPOTIFY_TOKEN} from '../constants/tokens';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string;

  constructor(private http: HttpClient) {
    this.token = SPOTIFY_TOKEN;
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
