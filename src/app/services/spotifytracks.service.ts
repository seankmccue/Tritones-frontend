import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../models/spotify-tracks';

@Injectable({
  providedIn: 'root'
})

export class SpotifytracksService {
  private apiUrlTracks = 'http://127.0.0.1:8000/trackData/'

  constructor(private http: HttpClient) { }

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.apiUrlTracks);
  }
}
