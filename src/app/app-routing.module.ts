import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const routes: Routes = [
  { path: '', component: AboveTheFoldComponent, pathMatch: 'full' },
  { path: 'home', component: AboveTheFoldComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactSectionComponent },
  { path: 'legal-notice', component: LegalNoticeComponent},
  { path: 'home', component: AboveTheFoldComponent, pathMatch: 'full' },
];

const routerOptions = {
  anchorScrolling: 'enabled'
} as ExtraOptions;

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
