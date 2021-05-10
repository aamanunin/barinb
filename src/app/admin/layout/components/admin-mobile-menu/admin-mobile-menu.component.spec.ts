import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import { AdminMenuService } from '@app/admin/menu';

import { AdminMenuLinkComponent } from '../admin-menu-link/admin-menu-link.component';
import { AdminMobileMenuComponent } from './admin-mobile-menu.component';

describe('AdminMobileMenuComponent', () => {
  let component: AdminMobileMenuComponent;
  let fixture: ComponentFixture<AdminMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminMobileMenuComponent, MockComponents(AdminMenuLinkComponent)],
      providers: [
        {
          provide: AdminMenuService,
          useValue: {
            links: jest.fn(() => []),
          } as Partial<AdminMenuService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
