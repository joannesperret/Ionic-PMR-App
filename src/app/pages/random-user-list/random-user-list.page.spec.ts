import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomUserListPage } from './random-user-list.page';

describe('RandomUserListPage', () => {
  let component: RandomUserListPage;
  let fixture: ComponentFixture<RandomUserListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomUserListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomUserListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
