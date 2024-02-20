import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Band} from '../../interfaces/band.interface';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
})
export class BandEditComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  id = null;
  band: Band = {
    'name': '',
    'origin': '',
    'city': '',
    'startYear': '',
    'separationYear': '',
    'founders': '',
    'members': 0,
    'musicalStyle': '',
    'introduction': '',
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpClient.get<Band>(`https://gamma-software.local.com/api/band/data/${this.id}`)
      .subscribe(
        (res) => {
          this.band = res;
        },
        () => {
          this.snackBar.open('Erreur lors du chargement du groupe', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      );
  }

  onSubmit(): void {
    this.httpClient.post(`https://gamma-software.local.com/api/band/edit/${this.id}`, this.band).subscribe(() => {
        this.router.navigate(['/']);
        this.snackBar.open('Groupe édité avec succès', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      },
      () => {
        this.snackBar.open('Erreur lors de l\'édition du groupe', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      });
  }
}


