import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CreateGuideComponent } from './create-guide/create-guide.component';
import { GuideComponent } from './guide/guide.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', component: JumbotronComponent, pathMatch: 'full'},
    {path: 'create', component: CreateGuideComponent},
    {path: 'guides', component: GuideComponent },
    {path: 'user/login', component: LoginComponent},
    {path: 'user/signup', component: SignupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);