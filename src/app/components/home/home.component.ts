import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {from} from "rxjs/index";
import {bufferCount} from "rxjs/internal/operators";

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
    this.createGrid();
  }

  createGrid() {
    this.spotifyService.getNewReleases().subscribe((rel: any) => {
      this.columns = [];
      this.newSongs = rel.albums.items;
      const colQuantity = Math.floor(this.container.nativeElement.offsetWidth / this.cardWidth);
      const sizeArray = Math.ceil(this.newSongs.length / colQuantity);
      console.log(colQuantity, sizeArray);
      from(this.newSongs).pipe(bufferCount(sizeArray)).subscribe(col => {
        this.columns.push(col);
      });
    });
  }

}
