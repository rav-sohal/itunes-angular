import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../../../services/playlist.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public data = [];
  public apiData: any;
  public results = [];
  public loading = false;
  public noData: any;
  p: number = 1;
  faSearch = faSearch;
  faRedo = faRedo;
  faHeadphones = faHeadphones;
  faExternalLinkAlt = faExternalLinkAlt;
  faPlus = faPlus;
  searchQuery: string = "";
  clickMessage = '';

  constructor(
    private api: ApiService, 
    private list: PlaylistService
  ) { }

  getAll() {
    this.api.getAll(this.searchQuery).subscribe((results) => {
      this.loading = true;
      console.log('Data is received - Result - ', results);
      this.data = results.results;
      this.loading = false;

      if (this.data.length <= 0) {
        this.noData = true;
      } else if (this.data.length >= 1) {
        this.noData = false;
      } else {
        this.noData = false;
      }
    })
  }

  savePlaylist() {
    localStorage.setItem('playlist', JSON.stringify(this.list.playlist));
    console.log('Saved', this.list.playlist);
  }

  closeAlert() {
    this.noData = false;
  }

  addSongToPlaylist(itunes) {
    this.list.playlist.push(Object.assign({},itunes));
    console.log('Playlist - ', this.list.playlist);
}

  refresh(): void {
    window.location.reload();
  }

  Search() {
    this.api.getAll(this.searchQuery).subscribe((results) => {
      this.loading = true;
      console.log('Data is received - Result - ', results);
      this.data = results.results;
      this.loading = false;
    })
  }
  ngOnInit() {

  }
}