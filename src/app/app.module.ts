import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PrivateComponent } from './pages/layout/private/private.component';
import { NotFoundComponent } from './pages/layout/not-found/not-found.component';
import { PublicComponent } from './pages/layout/public/public.component';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PagesComponent } from './pages/pages.component';
import { AppSettings } from './app.settings';

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/styles/utils/custom-overlay-container';
import { HttpConfigInterceptor } from './shared/services/interceptor.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/styles/components/menu/vertical-menu/vertical-menu.component';
import { FlagsMenuComponent } from './theme/styles/components/flags-menu/flags-menu.component';
import { GraphQLModule } from './graphql.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true,
};
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    NotFoundComponent,
    PublicComponent,
    PagesComponent,
    SidenavComponent,
    VerticalMenuComponent,
    FlagsMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    GraphQLModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    SharedModule,

    AppRoutingModule,

    GraphQLModule,
  ],
  providers: [
    AppSettings,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
