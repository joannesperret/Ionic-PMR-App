import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwPlanetPage } from './sw-planet.page';

describe('SwPlanetPage', () => {
  let component: SwPlanetPage;
  let fixture: ComponentFixture<SwPlanetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwPlanetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwPlanetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
