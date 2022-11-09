import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test4Component } from './components/test4/test4.component';
import { Test5Component } from './components/test5/test5.component';

const routes: Routes = [
  {path: '', redirectTo: '/test1', pathMatch: 'full'},
  {path:"test1",component:Test1Component},
  {path:"test2",component:Test2Component},
  {path:"test3",component:Test3Component},
  {path:"test4",component:Test4Component},
  {path:"test5",component:Test5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
