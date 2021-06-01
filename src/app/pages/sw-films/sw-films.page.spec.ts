import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwFilmsPage } from './sw-films.page';

describe('SwFilmsPage', () => {
  let component: SwFilmsPage;
  let fixture: ComponentFixture<SwFilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFilmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
