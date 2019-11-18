import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public data = [];
  public apiData: any;
  public loading = false;
  p: number = 1;
  faSearch = faSearch;
  faRedo = faRedo;
  faHeadphones = faHeadphones;

  searchQuery : string = "";


  constructor(private service: ApiService) { }

  getAll() {
    this.service.getAll(this.searchQuery).subscribe((results) => {
      this.loading = true;
      console.log('Data is received - Result - ', results);
      this.loading = false;
      this.data = results.results;
    })
  }

  refresh(): void {
    window.location.reload();
  }  

  Search(){
   this.service.getAll(this.searchQuery).subscribe((results) => {
      this.loading = true;
      console.log('Data is received - Result - ', results);
      this.loading = false;
      this.data = results.results;
    })
}
  ngOnInit() {
    
  }
}