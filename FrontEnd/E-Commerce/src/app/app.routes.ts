import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'admin', loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule),
        canActivate: [adminGuard]
    },
    {path:'**', component: PageNoteFoundComponent}
];
