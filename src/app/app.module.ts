import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ContentComponent } from './components/content-area/content/content.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PlaylistViewComponent } from './views/playlist-view/playlist-view/playlist-view.component';
import { NewsComponent } from './components/news/news/news.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeViewComponent,
    PlaylistViewComponent,
    NewsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
