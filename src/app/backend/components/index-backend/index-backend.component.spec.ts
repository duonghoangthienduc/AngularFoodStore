import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBackendComponent } from './index-backend.component';

describe('IndexBackendComponent', () => {
  let component: IndexBackendComponent;
  let fixture: ComponentFixture<IndexBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
