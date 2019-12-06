import { Component, OnInit, Input } from '@angular/core';
import { faHeadphones} from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../../../services/playlist.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  faHeadphones = faHeadphones;
  
  constructor(private list: PlaylistService) { }

  ngOnInit() {
  }

}
