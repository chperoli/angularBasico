import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
	{ path: '', redirectTo: '/pageOne', pathMatch: 'full' },
	// { path: '', component: PageOneComponent },
	// { path: 'pageOne', component: PageOneComponent },
	{ path: 'pageOne', loadChildren: () => import('./pages/page-one/page-one.module').then(m => m.PageOneModule), },
	{ path: 'pageTwo', component: PageTwoComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }