import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  ngOnInit() {
    AOS.init();
  }
}
