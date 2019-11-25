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
    localStorage.setItem('playlist', JSON.stringify(this.playlist));
    this.playlist = JSON.parse(localStorage.getItem('playlist'));
    console.log('Saved', this.playlist);
  }
  constructor() {
  }
}
