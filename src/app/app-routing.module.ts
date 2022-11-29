import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewchildComponent } from './newchild/newchild.component';
import { NewgrandchildComponent } from './newgrandchild/newgrandchild.component';


const routes: Routes = [
  {path:'child', component: NewchildComponent},
  {path:'gc', component: NewgrandchildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutes=[NewchildComponent,NewgrandchildComponent];
//optional //uurke , app module lo routes annitini import cheyyakunda idhokkate chestam now
