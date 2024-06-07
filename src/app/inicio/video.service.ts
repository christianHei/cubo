import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoUrls: string[] = [
    'https://krugercorp.com/cubo/lado1.mp4',
    'https://krugercorp.com/cubo/lado2.mp4',
    'https://krugercorp.com/cubo/lado3.mp4',
    'https://krugercorp.com/cubo/lado4.mp4',
    'https://krugercorp.com/cubo/lado5.mp4',
    'https://krugercorp.com/cubo/lado6.mp4'
  ];
  private videoElements: HTMLVideoElement[] = [];

  constructor() {
    console.log('VideoService constructor called');
    this.preloadVideos();
  }

  private preloadVideos(): void {
    for (const url of this.videoUrls) {
      const video = document.createElement('video');
      video.src = url;
      video.load();
      this.videoElements.push(video);
    }
  }

  getVideoElements(): HTMLVideoElement[] {
    return this.videoElements;
  }

  getVideoUrls(): string[] {
    return this.videoUrls;
  }
}
