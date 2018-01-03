import { JumboAndListComponent } from './jumbo-and-list/jumbo-and-list.component';
import { GuideListComponent } from './guide/guide-list/guide-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CreateGuideComponent } from './create-guide/create-guide.component';
import { GuideComponent } from './guide/guide.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', component: JumboAndListComponent, pathMatch: 'full'},
    {path: 'create', component: CreateGuideComponent},
    {path: 'user/:username/guides/:title', component: GuideComponent},
    {path: 'guides', component: GuideListComponent },
    {path: 'user/login', component: LoginComponent},
    {path: 'user/signup', component: SignupComponent},
    {path: 'about-us', component: AboutUsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
