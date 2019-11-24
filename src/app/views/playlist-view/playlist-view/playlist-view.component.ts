import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  faSave = faSave;

  constructor(private list: PlaylistService) { }

  savePlaylist() {
    localStorage.setItem('playlist', JSON.stringify(this.list.playlist));
    console.log('Saved', this.list.playlist);
  }
 
  getPlaylist() {
    if (localStorage.getItem('playlist') == null) {
      this.list.playlist = [];
    } else {
      this.list.playlist = JSON.parse(localStorage.getItem('playlist'));
    }
  }

  ngOnInit() {
    this.getPlaylist();
  }

}
