import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'**', component:PageNoteFoundComponent}
];
