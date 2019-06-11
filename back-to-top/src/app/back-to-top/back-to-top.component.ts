import { HostListener, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  @Input() positionToDisplayButton: number;
  @Input() behavior: ScrollBehavior;

  coordinates: ScrollToOptions; 
  showButton = false;

  constructor() { }

  ngOnInit() {
    this.coordinates = {
      left: 0, 
      top: 0, 
      behavior: this.behavior
    };
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    let pageYOffset = window.pageYOffset;
    let documentScrollTop = document.documentElement.scrollTop;
    let bodyScrollTop = document.body.scrollTop;

    if (pageYOffset || documentScrollTop 
        || bodyScrollTop > this.positionToDisplayButton) {
      this.showButton = true;
    }
    else {
      this.showButton = false;
    }
  }

  goToPageTop() {
    window.scroll(this.coordinates);
  }
}
