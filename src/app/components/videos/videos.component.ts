import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input() videos: Array<Video> = [];

  constructor(
    private httpService: HttpService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onChangeGrade(video: Video): void {
    this.messageService.addMessage(video.title)
    this.httpService
      .updateGrade(video)
      .subscribe()
  }
}
