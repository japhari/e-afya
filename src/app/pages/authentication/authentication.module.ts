import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
