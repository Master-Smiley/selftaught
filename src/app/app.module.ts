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
import { AuthComponent } from './auth/auth.component';
import { GuideResourceComponent } from './create-guide/guide-resource/guide-resource.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    PostPreviewComponent,
    CreateGuideComponent,
    GuideComponent,
    AuthComponent,
    GuideResourceComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
