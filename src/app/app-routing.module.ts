import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileComponent } from './file/file.component';
import { TextComponent } from './text/text.component';
import { DataBaseComponent } from './data-base/data-base.component';

const routes: Routes = [
  {path:'file', component:FileComponent},
  {path:'text', component:TextComponent},
  {path:'database', component:DataBaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
