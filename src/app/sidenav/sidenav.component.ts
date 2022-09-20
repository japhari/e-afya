import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { AuthServicesService } from '../shared/services/auth-services';
import { StorageKey } from '../shared/services/storage.model';
import { StorageService } from '../shared/services/storage.service';
import { MenuService } from '../theme/styles/components/menu/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [MenuService],
})
export class SidenavComponent implements OnInit {
  public userImage = '../assets/img/users/user.png';
  public menuItems: Array<any>;
  public settings: Settings;
  token: string;
  user: any;
  principal: any;
  facility_code: any;
  info: string;
  constructor(
    public appSettings: AppSettings,
    public menuService: MenuService,
    private auth: AuthServicesService,
    private storeSvc: StorageService
  ) {
    this.settings = this.appSettings.settings;
    this.token = localStorage.getItem('currentClient');
    this.info = localStorage.getItem('userInfo');
    if (this.token) {
      this.user = this.storeSvc.read(StorageKey.CURRENT_USER);
      if (this.user) {
        this.principal = this.user.principal;
        this.facility_code = this.principal.facility.facilityCode;
      }
    }
  }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
    console.log(this.menuItems);
  }

  public closeSubMenus() {
    let menu = document.getElementById('vertical-menu');
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

  logout() {
    this.auth.clearSession();
  }
}
