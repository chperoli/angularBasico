import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from './component/component.module';
// import { LayoutModule } from './layout/layout.module';
// import { DirectiveModule } from './directive/directive.module';
// import { PipeModule } from './pipe/pipe.module';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ComponentModule,
		// LayoutModule,
		// DirectiveModule,
		// PipeModule,
	],
	exports: [
		CommonModule,
		HttpClientModule,
		ComponentModule,
		// LayoutModule,
		// DirectiveModule,
		// PipeModule
	]
})
export class CoreModule { }