import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpishpeopleComponent } from './trumpishpeople.component';

describe('TrumpishpeopleComponent', () => {
  let component: TrumpishpeopleComponent;
  let fixture: ComponentFixture<TrumpishpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpishpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpishpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
