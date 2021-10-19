import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SatuComponent } from './satu/satu.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'satu',
  component: SatuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
