import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwPlanetDetailsPage } from './sw-planet-details.page';

describe('SwPlanetDetailsPage', () => {
  let component: SwPlanetDetailsPage;
  let fixture: ComponentFixture<SwPlanetDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwPlanetDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwPlanetDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
