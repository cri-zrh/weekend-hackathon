import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatButtonComponent } from './cat-button.component';

describe('CatButtonComponent', () => {
  let component: CatButtonComponent;
  let fixture: ComponentFixture<CatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
