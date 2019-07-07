import { HostListener, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  @Input() scrollPositionToDisplayButton: number;
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

  @HostListener('window:scroll')
  onWindowScroll() {
    const pageYOffset = window.pageYOffset;
    const documentScrollTop = document.documentElement.scrollTop;
    const bodyScrollTop = document.body.scrollTop;

    if (pageYOffset || documentScrollTop 
        || bodyScrollTop > this.scrollPositionToDisplayButton) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  goToPageTop() {
    window.scroll(this.coordinates);
  }
}
