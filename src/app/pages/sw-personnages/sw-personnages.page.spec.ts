import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwPersonnagesPage } from './sw-personnages.page';

describe('SwPersonnagesPage', () => {
  let component: SwPersonnagesPage;
  let fixture: ComponentFixture<SwPersonnagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwPersonnagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwPersonnagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
