import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input() videos: Array<Video> = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  onChangeGrade(video: Video): void {
    this.httpService
      .updateGrade(video)
      .subscribe()
  }
}
