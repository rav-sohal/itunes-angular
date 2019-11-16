import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private service: ApiService) { }
  private http: HttpClient
  ngOnInit() {
    this.getApi();
  }

  private getApi() {
    this.service.getAll().subscribe((data) => {
      console.log('Data' + data);
    })
  }
}
