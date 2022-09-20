import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimengModule } from './primeng.module';
import { MatIconRegistry } from '@angular/material/icon';
import { IconService } from './services/icon-services';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    FlexLayoutModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule,
    TranslateModule,
    NgbModule,
    FlexLayoutModule,
  ],
  entryComponents: [],
})
export class SharedModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private svgIconService: IconService,
    private domSanitizer: DomSanitizer
  ) {
    for (let i = 0; i < this.svgIconService.customerIcons.length; i++) {
      this.matIconRegistry.addSvgIconLiteral(
        this.svgIconService.customerIcons[i].name,
        this.domSanitizer.bypassSecurityTrustHtml(
          this.svgIconService.customerIcons[i].tag
        )
      );
    }
  }
}
