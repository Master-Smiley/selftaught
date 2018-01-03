import { AuthService } from './auth/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './jumbo-and-list/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { CreateGuideComponent } from './create-guide/create-guide.component';
import { GuideService } from './guide/guide.service';
import { GuideComponent } from './guide/guide.component';
import { AuthComponent } from './auth/auth.component';
import { GuideResourceComponent } from './create-guide/guide-resource/guide-resource.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { GuideListComponent } from './guide/guide-list/guide-list.component';
import { JumboAndListComponent } from './jumbo-and-list/jumbo-and-list.component';
import { JumboListService} from './jumbo-and-list/jumboList.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    PostPreviewComponent,
    CreateGuideComponent,
    AuthComponent,
    GuideResourceComponent,
    SignupComponent,
    LoginComponent,
    AboutUsComponent,
    FooterComponent,
    FilterPipe,
    GuideListComponent,
    GuideComponent,
    JumboAndListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [JumboListService, GuideService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
