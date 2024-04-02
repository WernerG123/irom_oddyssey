import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { WebcamComponent } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-camera',
  templateUrl: './custom-camera.component.html',
  styleUrls: ['./custom-camera.component.scss']
})
export class CustomCameraComponent implements OnInit {
  @ViewChild(WebcamComponent) webcamComponent!: WebcamComponent;
  triggerObservable: Subject<void> = new Subject<void>();

  @Input() myWidth: any = 200;
  @Input() myHeight: any = 200;
  @Output() image: EventEmitter<any> = new EventEmitter();
  ratioSet = false;
  width = 0;
  height = 0;

  constructor() { }

  ngOnInit(): void {
    this.getWidth()
    this.getHeight()
    this.ratioSet = true;
  }

  handleImageCapture(_image: any) {
    // Do something with the captured image (e.g., save it, display it)
    console.log('Captured image:', _image);
    this.image.emit(_image)
  }

  captureImage() {
    // Trigger the image capture
    this.triggerObservable.next();
  }

  getWidth() {
    var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // console.log(`Width: ${viewportWidth}px`)
    this.width = viewportWidth;
    return viewportWidth;
  }

  getHeight() {
    var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // console.log(`Height: ${viewportHeight}px`)
    this.height = viewportHeight;
    return viewportHeight;
  }
}
