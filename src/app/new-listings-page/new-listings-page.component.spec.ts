import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListingsPageComponent } from './new-listings-page.component';

describe('NewListingsPageComponent', () => {
  let component: NewListingsPageComponent;
  let fixture: ComponentFixture<NewListingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
