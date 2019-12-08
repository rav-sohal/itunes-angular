import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentComponent } from '../../components/content-area/content/content.component';
import { HeaderComponent } from '../../components/header/header/header.component';
import { FooterComponent } from '../../components/footer/footer/footer.component';
import { NewsComponent } from '../../components/news/news/news.component';
import { faHeadphones} from '@fortawesome/free-solid-svg-icons';


import { HomeViewComponent } from './home-view.component';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewComponent, HeaderComponent, FooterComponent, ContentComponent, NewsComponent, faHeadphones],
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
