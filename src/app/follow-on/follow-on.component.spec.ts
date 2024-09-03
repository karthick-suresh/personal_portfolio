import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowOnComponent } from './follow-on.component';

describe('FollowOnComponent', () => {
  let component: FollowOnComponent;
  let fixture: ComponentFixture<FollowOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowOnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
