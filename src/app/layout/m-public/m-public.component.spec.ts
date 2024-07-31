import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPublicComponent } from './m-public.component';

describe('MPublicComponent', () => {
  let component: MPublicComponent;
  let fixture: ComponentFixture<MPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MPublicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
