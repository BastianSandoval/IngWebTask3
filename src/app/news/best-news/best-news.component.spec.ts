import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestNewsComponent } from './best-news.component';

describe('BestNewsComponent', () => {
  let component: BestNewsComponent;
  let fixture: ComponentFixture<BestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
