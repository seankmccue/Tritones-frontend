// import { Component, OnInit } from '@angular/core';
// import { SpotifytracksService } from '../spotifytracks.service';
// import { Track } from '../spotify-tracks';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   tracks: Track[] = [];

//   constructor(private spotifyService: SpotifytracksService) {}

//   ngOnInit(): void {
//     this.getTracks();
//   }

//   getTracks(): void {
//     this.spotifyService.getTracks().subscribe(
//       (data) => {
//         this.tracks = data;
//       },
//       (error) => {
//         console.error('Error fetching tracks', error);
//       }
//     );
//   }
// }

import { Component, OnInit, HostListener } from '@angular/core';
import { SpotifytracksService } from '../services/spotifytracks.service';
import { Track } from '../models/spotify-tracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tracks: Track[] = [];
  isDesktopWidth = window.innerWidth >= 1280;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  constructor(private spotifyService: SpotifytracksService) {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.getTracks();
    this.checkScreenWidth();
  }

  getTracks(): void {
    this.spotifyService.getTracks().subscribe(
      (data) => {
        this.tracks = data;
      },
      (error) => {
        console.error('Error fetching tracks', error);
      }
    );
  }

  private checkScreenWidth(): void {
    this.isDesktopWidth = window.innerWidth >= 1280;
  }

  isDesktopWidthValid(): boolean {
    return this.isDesktopWidth;
  }
}
