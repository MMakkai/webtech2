import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { ListGameComponent } from 'src/app/list-game/list-game.component';
import { AddGameComponent } from 'src/app/add-game/add-game.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { LogoutComponent } from 'src/app/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-game', component: ListGameComponent },
  { path: 'add-game', component: AddGameComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
