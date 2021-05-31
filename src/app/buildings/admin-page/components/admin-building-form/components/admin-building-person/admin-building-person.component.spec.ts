import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { PersonService } from '@app/persons/service';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminBuildingPersonComponent } from './admin-building-person.component';

describe('AdminBuildingPersonComponent', () => {
  let component: AdminBuildingPersonComponent;
  let fixture: ComponentFixture<AdminBuildingPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, MockModule(PersonSharedModule)],
      declarations: [AdminBuildingPersonComponent],
      providers: [
        {
          provide: PersonService,
          useValue: {
            persons$: of(),
          } as Partial<PersonService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
