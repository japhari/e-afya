import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  switchLang(lang: string) {
    localStorage.setItem('lang', JSON.stringify(lang));
    this.translate.use(lang);
  }
}
