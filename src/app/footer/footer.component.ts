import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit() {
    const legalLink = document.getElementById('legal-link');
    if (legalLink) {
      legalLink.addEventListener('click', this.showLegalTemplate);
    }
  }

  showLegalTemplate() {
    const legalTemplate = document.getElementById('legal-template');
    if (legalTemplate) {
      legalTemplate.style.display = 'none';
      legalTemplate.style.display = 'block';
      legalTemplate.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
