import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { TasinmazAddComponent } from './components/tasinmazs/tasinmaz-add/tasinmaz-add.component';
import { TasinmazComponent } from './components/tasinmazs/tasinmaz/tasinmaz.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [ {path:"",pathMatch:"full",component:LoginComponent},
{path:"home", component:HomeComponent,canActivate:[LoginGuard]},
{path:"tasinmazs",component:TasinmazComponent,canActivate:[LoginGuard]},
{path:"tasinmazs/il/:ilId",component:TasinmazComponent,canActivate:[LoginGuard]},
{path:"tasinmazs/add",component:TasinmazAddComponent,canActivate:[LoginGuard]},
{path:"login",component:LoginComponent},{path:"map",component:MapComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
