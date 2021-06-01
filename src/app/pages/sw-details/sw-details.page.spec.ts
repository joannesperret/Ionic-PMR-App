import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwDetailsPage } from './sw-details.page';

describe('SwDetailsPage', () => {
  let component: SwDetailsPage;
  let fixture: ComponentFixture<SwDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
