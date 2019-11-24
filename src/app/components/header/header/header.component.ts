import { Component, OnInit, Input } from '@angular/core';
import { faHeadphones} from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../../../services/playlist.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  faHeadphones = faHeadphones;

  //@Input()playlist= [];
  
  constructor(private list: PlaylistService) { }

  addSongToPlaylist(itunes) {
    this.list.playlist.push(itunes);
    console.log('Playlist - ', this.list.playlist);
}

  ngOnInit() {
  }

}
