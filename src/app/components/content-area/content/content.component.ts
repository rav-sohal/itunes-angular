import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public data = [];
  public apiData: any;
  searchQuery : string = "";
  public loading = false;

  constructor(private service: ApiService) { }

  getAll() {
    this.service.getAll(this.searchQuery).subscribe((results) => {
      this.loading = true;
      console.log('Data is received - Result - ', results);
      this.loading = false;
      this.data = results.results;
    })
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