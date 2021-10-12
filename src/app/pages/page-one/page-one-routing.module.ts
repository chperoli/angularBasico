import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneMainComponent } from './page-one-main/page-one-main.component';

const routes: Routes = [
	{path: '', component: PageOneMainComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class PageOneRoutingModule { }