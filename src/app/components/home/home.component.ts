import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {from} from "rxjs/index";
import {bufferCount} from "rxjs/internal/operators";
import {createGrid} from "../../shared/functions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  newSongs = [];
  columns = [];
  cardWidth = 300;
  @ViewChild('masonry') container;

  constructor(private spotifyService: SpotifyService) {
    this.columns = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    createGrid(this.spotifyService.getNewReleases(), this);
  }

  get service() {
    return this.spotifyService;
  }


}
