import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
})
export class BandListComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router, private snackBar: MatSnackBar) {
  }

  bands: any[] = [];

  ngOnInit(): void {
    this.loadBandList();
  }

  loadBandList() {
    this.httpClient.get<any[]>('https://gamma-software.local.com/api/band/')
      .subscribe(
        (res) => {
          this.bands = res;
        },
        () => {
          this.snackBar.open('Erreur lors du chargement de la liste des groupes', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      );
  }


  deleteBand(id: number): void {
    if (confirm('Êtes vous sur de vouloir supprimer ce groupe ?')) {
      this.httpClient.delete(`https://gamma-software.local.com/api/band/delete/${id}`)
        .subscribe(() => {
          this.loadBandList();
          this.snackBar.open('Groupe supprimé avec succès', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }, () => {
          this.snackBar.open('Erreur lors de la suppression du groupe', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        });
    }
  }

  editBand(id: number) {
    this.router.navigate(['/band/edit/', id]);
  }
}


