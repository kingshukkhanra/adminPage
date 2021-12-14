import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdomainlistComponent } from './showdomainlist.component';

describe('ShowdomainlistComponent', () => {
  let component: ShowdomainlistComponent;
  let fixture: ComponentFixture<ShowdomainlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdomainlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdomainlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
