import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeViewComponent } from './home-view.component';
import { ApiService } from '../../services/api.service';
import { Component } from '@angular/core';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

   @Component({selector: 'app-header', template: ''})
   class AppHeaderStubComponent {}

   @Component({selector: 'app-content', template: ''})
   class AppContenStubComponent { }

   @Component({selector: 'app-news', template: ''})
   class AppNewsStubComponent {}

   @Component({selector: 'app-footer', template: ''})
   class AppFooterStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewComponent,
                 AppHeaderStubComponent,
                 AppContenStubComponent,
                 AppNewsStubComponent,
                 AppFooterStubComponent
      ],
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});