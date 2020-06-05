import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, AfterViewInit {


  id: string;
  artist: any;
  topTacks: any;

  constructor(private spotifyService: SpotifyService, private router: ActivatedRoute) {
    this.router.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getArtist();
  }

  getArtist() {
    this.spotifyService.getArtist(this.id).subscribe(artist => {
      this.artist = artist;
    });
    this.spotifyService.getTopTracksArtist(this.id).subscribe( tt => {
      this.topTacks = tt;
    });
  }

}
