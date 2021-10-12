import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatSelectModule,
		MatCheckboxModule,
		MatIconModule,
		MatDialogModule,
		MatSlideToggleModule,
		MatRadioModule,
		MatTableModule,
		MatSnackBarModule,
		MatBadgeModule,
		MatExpansionModule,
		OverlayModule,
		MatDatepickerModule,
		MatTooltipModule,
		MatMenuModule,
		MatDividerModule,
		DragDropModule,
		ReactiveFormsModule
	],
	exports: [
		RouterModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		MatTabsModule,
		MatSelectModule,
		MatCheckboxModule,
		MatIconModule,
		MatDialogModule,
		MatSlideToggleModule,
		MatRadioModule,
		MatTableModule,
		MatSnackBarModule,
		MatExpansionModule,
		OverlayModule,
		MatDatepickerModule,
		MatTooltipModule,
		MatMenuModule,
		MatDividerModule,
		DragDropModule,
		ReactiveFormsModule
	],
})
export class SharedModule { }