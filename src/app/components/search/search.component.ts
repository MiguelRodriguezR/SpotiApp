import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {from} from "rxjs/index";
import {bufferCount} from "rxjs/internal/operators";
import {createGrid} from "../../shared/functions";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  artists = [];
  columns = [];
  cardWidth = 300;
  @ViewChild('masonry') container;


  ngOnInit(): void {
  }

  buscar(term: string) {
    createGrid(this.spotifyService.getArtists(term), this);
  }

  get service() {
    return this.spotifyService;
  }


}
