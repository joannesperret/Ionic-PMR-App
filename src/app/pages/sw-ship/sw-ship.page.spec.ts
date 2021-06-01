import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwShipPage } from './sw-ship.page';

describe('SwShipPage', () => {
  let component: SwShipPage;
  let fixture: ComponentFixture<SwShipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwShipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwShipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
