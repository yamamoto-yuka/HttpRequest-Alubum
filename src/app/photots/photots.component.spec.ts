import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhototsComponent } from './photots.component';

describe('PhototsComponent', () => {
  let component: PhototsComponent;
  let fixture: ComponentFixture<PhototsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhototsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhototsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
