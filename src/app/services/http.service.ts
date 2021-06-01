import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment'
import { Video } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getVideoList(searchInput: string): Observable<Array<Video>> {
    return this.http.get<Array<Video>>(`${env.BASE_URL}/videos?q=${searchInput}`, {})
  }

  updateGrade(video: Video): Observable<Video> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put<Video>(`${env.BASE_URL}/videos/${video.id}`, video, httpOptions);
  }
}
