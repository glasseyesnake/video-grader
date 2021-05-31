import { Component, OnInit } from '@angular/core';
import { Video } from '../../models';
import { HttpService } from '../../services/http.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public videos: Array<Video> = [];
  searchTextChanged: Subject<string> = new Subject<string>();

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void { }

  onChangeSearch(searchString: string) {
    if (this.searchTextChanged.observers.length === 0) {
      this.searchTextChanged
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe(searchString => {
          this.searchVideos(searchString);
        });
    }
    this.searchTextChanged.next(searchString);
  }

  searchVideos(search: string): void {
    if (!search) {
      this.videos = []
      return
    }
    this.httpService
      .getVideoList(search)
      .subscribe((videoList: Array<Video>) => {
        this.videos = videoList;
      });
  }

  onChangeGrade(video: Video): void {
    this.httpService
      .updateGrade(video)
      .subscribe()
  }
}
