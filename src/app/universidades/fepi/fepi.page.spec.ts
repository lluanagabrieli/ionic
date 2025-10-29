import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FepiPage } from './fepi.page';

describe('FepiPage', () => {
  let component: FepiPage;
  let fixture: ComponentFixture<FepiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FepiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
