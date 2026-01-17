import { Component } from '@angular/core';
import { PhotoService } from '../services/photos.service';
import { Photo } from '../models/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos: Photo[] = []; // Assuming you have an array of photos

  sortedPhotos: Photo[] = [];
  
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe((data: Photo[]) => {
      console.log(data);  // Log the data here
      this.photos = data;
      this.sortedPhotos = this.photos.sort((a, b) => b.year - a.year);
    });
  }
  
  
}
