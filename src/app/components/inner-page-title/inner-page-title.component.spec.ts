import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPageTitleComponent } from './inner-page-title.component';

describe('InnerPageTitleComponent', () => {
  let component: InnerPageTitleComponent;
  let fixture: ComponentFixture<InnerPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerPageTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
