import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photos';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrlPhotos = 'http://127.0.0.1:8000/photoData/';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrlPhotos);
  }
}