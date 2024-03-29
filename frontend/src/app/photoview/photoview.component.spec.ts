import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoviewComponent } from './photoview.component';

describe('PhotoviewComponent', () => {
  let component: PhotoviewComponent;
  let fixture: ComponentFixture<PhotoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
