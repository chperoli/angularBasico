import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { PageOneMainComponent } from './page-one-main/page-one-main.component';
import { PageOneRoutingModule } from './page-one-routing.module';

@NgModule({
	declarations: [
		PageOneMainComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		CoreModule ,
		PageOneRoutingModule,
	]
})
export class PageOneModule { }