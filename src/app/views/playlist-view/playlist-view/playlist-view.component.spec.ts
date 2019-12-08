import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../../components/header/header/header.component';
import { FooterComponent } from '../../../components/footer/footer/footer.component';
import { PlaylistViewComponent } from './playlist-view.component';


describe('PlaylistViewComponent', () => {
  let component: PlaylistViewComponent;
  let fixture: ComponentFixture<PlaylistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistViewComponent, HeaderComponent, FooterComponent], 
      imports: [
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
