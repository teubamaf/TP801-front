import { Component, Input } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pompe',
  templateUrl: './pompe.component.html',
  styleUrls: ['./pompe.component.scss']
})
export class PompeComponent {

  code!: number;
  reservoir!: number;
  error: string = '';
  result: string = '';

  @Input() carburant!: string;

  constructor(private dataService: DataService) { }

  onValidateCode() {
    if (this.code <= 0 || this.code === undefined) return;
    if (this.reservoir <= 0 || this.code === undefined) return;

    this.dataService.get(this.code).pipe(
      // on gère l'erreur 404, si le code n'existe pas
      catchError((err: any) => {
        this.error = `Le code ${this.code} n'existe pas !`;
        throw err;
      }),
      tap(value => {
        // verifie que l'on est à la bonne pompe
        if (value.carburant != this.carburant) {
          this.error = `Vous n'êtes pas à la bonne pompe, ici c'est ${this.carburant}`;
          return;
        }

        // on sert l'essence
        value.litre -= this.reservoir;

        if (value.litre <= 0) {
          // on supprime
          this.dataService.delete(this.code).subscribe();
          this.result = 'Après recharge, vous avez utilisé tous votre crédit de carburant !'; 
        } else {
          // on modifie
          this.dataService.update(this.code, value.litre, value.carburant).subscribe();
          this.result = `Après recharge, il vous reste ${value.litre} litre de carburant !`;
        }
      })
    ).subscribe();
  }
}
