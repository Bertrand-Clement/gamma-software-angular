import {RouterModule, Routes} from '@angular/router';
import {BandEditComponent} from "./modules/band-edit/band-edit.component";
import {BandListComponent} from "./modules/band-list/band-list.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: BandListComponent},
  {path: 'band/edit/:id', component: BandEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
