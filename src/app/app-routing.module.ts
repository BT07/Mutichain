import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincreatorComponent } from './logincreator/logincreator.component';
import { CreatordashComponent } from './creatordash/creatordash.component';

const routes: Routes = [
  {
    path: 'logincreator' , component:LogincreatorComponent
  },
  {
    path:'creatordash' , component:CreatordashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
