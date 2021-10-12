import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		SharedModule,
		CoreModule ,
	]
})
export class PageTwoModule { }