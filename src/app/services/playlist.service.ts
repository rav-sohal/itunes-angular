import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  public playlist = [];

  getPlaylist() {
    if (localStorage.getItem('playlist') == null) {
      this.playlist = [];
    } else {
      this.playlist = JSON.parse(localStorage.getItem('playlist'));

    }
  }

  savePlaylist() {
    // first save the data
    localStorage.setItem('playlist', JSON.stringify(this.playlist));
    // get what is saved afterwords
    this.playlist = JSON.parse(localStorage.getItem('playlist'));
    console.log('Saved', this.playlist);
}

  // getPlaylistFromLocalStorage() {
  //   var playlistFromLocalStorage = JSON.parse(localStorage.getItem("playlist"));
  //   console.log('Local Storage is', this.playlist)
  // }

  constructor() {
  }
}
