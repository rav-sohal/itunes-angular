import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  faSave = faSave;
  faMinus = faMinus;
  showDeleteButtons: boolean = false;
  p: number = 1;

  constructor(private list: PlaylistService) { }

  remove(collectionId: number) {
    this.list.deleteSongFromPlaylist(collectionId);
  }

  ngOnInit() {
    this.list.getPlaylist();

  }
}
