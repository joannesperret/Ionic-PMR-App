import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwFilmsCharactersPage } from './sw-films-characters.page';

describe('SwFilmsCharactersPage', () => {
  let component: SwFilmsCharactersPage;
  let fixture: ComponentFixture<SwFilmsCharactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFilmsCharactersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwFilmsCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
