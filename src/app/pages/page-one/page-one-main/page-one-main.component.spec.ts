import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageOneMainComponent } from './page-one-main.component';

describe('PageOneMainComponent', () => {
	let component: PageOneMainComponent;
	let fixture: ComponentFixture<PageOneMainComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PageOneMainComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PageOneMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});