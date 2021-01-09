import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string;
  headers: any;
  api = 'https://api.spotify.com/v1/';
  loading = false;

  constructor(private authService: AuthService, private http: HttpClient) {}

  getQ(query) {
    this.token = this.authService.SPOTIFY_TOKEN;
    const headerObj = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    this.headers = {headers: headerObj};
    this.loading = true;
    return this.http.get(`${this.api}${query}`, this.headers);
  }

  getNewReleases() {
    return this.getQ('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(term) {
    return this.getQ(`search?q=${term}&type=artist`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id) {
    return this.getQ(`artists/${id}`);
  }

  getTopTracksArtist(id) {
    return this.getQ(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
