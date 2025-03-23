import { Routes } from '@angular/router';
import { HomeComponent } from './rickyAndMorty/pages/home/home.component';
import { DetailsComponent } from './rickyAndMorty/pages/details/details.component';

export const routes: Routes = [

    {
        path:'home', component: HomeComponent
    },
    {
        path:'details/:id', component:DetailsComponent
    },
    {
        path:'**', redirectTo:'home', pathMatch:'full'
    }
];
