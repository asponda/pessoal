import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { SkillItemComponent } from '../components/skill-item/skill-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { TestModule } from '../../../test/test.module';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, TestModule ],
      declarations: [ SkillsComponent, SkillItemComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
