import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { Role } from 'src/app/shared/model/role';
import { DashbooardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public settings: Settings;
  dashlets: any;
  user: any;
  userId: any;
  constructor(
    public appSettings: AppSettings,
    private router: Router,
    private service: DashbooardService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userInfo'));
    if (this.user) {
      this.userId = this.user.principal.id;
      this.dashboard(this.userId);
    }
  }

  dashboard(userId) {
    this.service.userById(userId).subscribe(({ data, loading }) => {
      if (data.getUserById.code === 8000) {
        const roles = data.getUserById.data.roles as Role[];
        const tiles = [];
        roles.forEach((role) => {
          const roleTiles = role.tilesList;
          roleTiles.forEach((roleTile) => {
            tiles.push(roleTile);
          });
        });
        this.dashlets = tiles;
      } else {
      }
    });
  }
  openLink(param) {
    this.router.navigate([param.link]);
  }
}
