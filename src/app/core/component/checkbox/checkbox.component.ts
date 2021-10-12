import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
	@Input() title: string;
	@Input() hint: string;
	@Input() checkText: string;
	@Input() checked: boolean;
	@Output() fieldChange = new EventEmitter();

	constructor() { }

	ngOnInit(): void { }

	testando(event) {
		alert(event.checked);
		console.log(event.checked);
		debugger;
	}
}