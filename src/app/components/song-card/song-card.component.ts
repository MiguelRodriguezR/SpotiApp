import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {

  @Input() song;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToArtist() {
    this.router.navigate(['/artist', this.song.type === 'artist' ? this.song.id : this.song.artists[0].id]);
  }
}
