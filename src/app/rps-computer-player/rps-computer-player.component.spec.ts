import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsComputerPlayerComponent } from './rps-computer-player.component';

describe('RpsComputerPlayerComponent', () => {
  let component: RpsComputerPlayerComponent;
  let fixture: ComponentFixture<RpsComputerPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpsComputerPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsComputerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
