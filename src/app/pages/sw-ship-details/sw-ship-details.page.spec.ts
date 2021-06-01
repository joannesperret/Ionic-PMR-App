import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwShipDetailsPage } from './sw-ship-details.page';

describe('SwShipDetailsPage', () => {
  let component: SwShipDetailsPage;
  let fixture: ComponentFixture<SwShipDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwShipDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwShipDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
