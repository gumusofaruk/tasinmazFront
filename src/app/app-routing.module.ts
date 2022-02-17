import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasinmazAddComponent } from './components/tasinmaz-add/tasinmaz-add.component';
import { TasinmazComponent } from './components/tasinmaz/tasinmaz.component';

const routes: Routes = [ {path:"",pathMatch:"full",component:TasinmazComponent},
{path:"tasinmazs",component:TasinmazComponent},
{path:"tasinmazs/il/:ilId",component:TasinmazComponent},
{path:"tasinmazs/add",component:TasinmazAddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
