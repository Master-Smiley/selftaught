import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CreateGuideComponent } from './create-guide/create-guide.component';
import { GuideComponent } from './guide/guide.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', component: JumbotronComponent, pathMatch: 'full'},
    {path: 'create', component: CreateGuideComponent},
    {path: 'guide', component: GuideComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);