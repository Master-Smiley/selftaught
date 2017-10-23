import { AuthService } from './auth/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { CreateGuideComponent } from './create-guide/create-guide.component';
import { GuideComponent } from './guide/guide.component';
import { GuideService } from './guide/guide.service';
import { AuthComponent } from './auth/auth.component';
import { GuideResourceComponent } from './create-guide/guide-resource/guide-resource.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { GuideListComponent } from './guide/guide-list/guide-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    PostPreviewComponent,
    CreateGuideComponent,
    GuideComponent,
    AuthComponent,
    GuideResourceComponent,
    SignupComponent,
    LoginComponent,
    AboutUsComponent,
    FooterComponent,
    GuideListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [GuideService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
