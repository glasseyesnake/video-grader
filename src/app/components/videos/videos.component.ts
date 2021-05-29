import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/Video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Video[] = [
    {
      id: 1,
      title: "Mikaels film",
      grade: 5
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
