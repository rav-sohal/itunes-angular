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

  deleteSongFromPlaylist(collectionId: number) {
    this.getPlaylist()
    const songIndex = this.playlist.findIndex(s => s.collectionId === collectionId)
    if (songIndex > -1) {
      this.playlist.splice(songIndex, 1)
      this.savePlaylist();
      console.log("Item deleted");
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
