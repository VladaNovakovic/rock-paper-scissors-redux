import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsScoreboardComponent } from './rps-scoreboard.component';

describe('RpsScoreboardComponent', () => {
  let component: RpsScoreboardComponent;
  let fixture: ComponentFixture<RpsScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpsScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
