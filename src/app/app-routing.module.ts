import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
