import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-one-main',
	templateUrl: './page-one-main.component.html',
	styleUrls: ['./page-one-main.component.css']
})
export class PageOneMainComponent implements OnInit {
	checked: boolean = false;

	constructor() { }

	ngOnInit(): void { }

	changeCheckbox(event) {
		console.log(event.value);
	}
}