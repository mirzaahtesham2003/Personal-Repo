import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user-access/login/login.component';

export const routes: Routes = [
    {
        path : 'Register',
        component : RegisterComponent
    },
    {
        path : 'Login',
        component: LoginComponent
    }
];
