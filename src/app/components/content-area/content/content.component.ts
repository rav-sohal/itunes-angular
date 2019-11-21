import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public data = [];
  public playlist = [];
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

  constructor(private service: ApiService) { }

  getAll() {
    this.service.getAll(this.searchQuery).subscribe((results) => {
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

  closeAlert() {
    this.noData = false;
  }

  addSongToPlaylist(itunes) {
    this.playlist.push(itunes);
    console.log(this.playlist);
}

  refresh(): void {
    window.location.reload();
  }

  Search() {
    this.service.getAll(this.searchQuery).subscribe((results) => {
      this.loading = true;
      console.log('Data is received - Result - ', results);
      this.data = results.results;
      this.loading = false;
    })
  }
  ngOnInit() {

  }
}