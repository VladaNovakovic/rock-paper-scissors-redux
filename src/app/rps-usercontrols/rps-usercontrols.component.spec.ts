import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsUsercontrolsComponent } from './rps-usercontrols.component';

describe('RpsUsercontrolsComponent', () => {
  let component: RpsUsercontrolsComponent;
  let fixture: ComponentFixture<RpsUsercontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpsUsercontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsUsercontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
