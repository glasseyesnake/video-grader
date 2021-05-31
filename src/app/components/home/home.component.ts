import { Component, OnInit } from '@angular/core';
import { Video } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public videos: Array<Video> = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.searchVideos("")
   }

  searchVideos(search: string): void {
    this.httpService
      .getVideoList(search)
      .subscribe((videoList: Array<Video>) => {
        this.videos = videoList;
      });
  }

  updateGrade(video: Video): void {
    this.httpService
      .updateGrade(video)
      .subscribe()
  }
}
