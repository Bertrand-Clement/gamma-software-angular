import {HttpClientModule} from '@angular/common/http';
import {NgModule} from "@angular/core";
import {BandListComponent} from "./modules/band-list/band-list.component";
import {CommonModule} from "@angular/common";
import {BandEditComponent} from "./modules/band-edit/band-edit.component";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    BandListComponent,
    BandEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    FormsModule,
    MatSnackBarModule,
  ],
  exports: [
    BandListComponent,
    BandEditComponent,
  ]
})
export class AppModule {
}
