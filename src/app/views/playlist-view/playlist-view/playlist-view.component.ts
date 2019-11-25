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

  ngOnInit() {
    this.list.getPlaylist();

  }
}
