import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePassPage } from './create-pass.page';

describe('CreatePassPage', () => {
  let component: CreatePassPage;
  let fixture: ComponentFixture<CreatePassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
