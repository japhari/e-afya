import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  language = 'en';
  constructor(
    private primengConfig: PrimeNGConfig,
    public translate: TranslateService
  ) {
    this.language = localStorage.getItem('lang');
    translate.addLangs(['en', 'nl', 'fr', 'sw', 'po']);
    if (this.language) {
      translate.setDefaultLang('en');
    } else {
      translate.setDefaultLang('en');
    }
    console.log(this.language);
  }
  val: number | undefined;
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  title = 'e-Afya';
}
