import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppHeaderComponent } from '../app-header/app-header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should show todays day name and date', () => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.ngOnInit).toEqual('TUESDAY');
    expect(app.ngOnInit.todayDate).toEqual('November 15, 2022');
  });
})