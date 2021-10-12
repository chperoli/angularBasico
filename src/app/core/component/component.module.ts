import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		CheckboxComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
	],
	providers: [],
	exports: [
		CheckboxComponent,
	],
})
export class ComponentModule { }