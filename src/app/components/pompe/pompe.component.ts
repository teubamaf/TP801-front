import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pompe',
  templateUrl: './pompe.component.html',
  styleUrls: ['./pompe.component.scss']
})
export class PompeComponent implements OnInit {

  code!: number;
  reservoir!: number;
  error: string = '';

  @Input() carburant!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.carburant);
  }

  onValidateCode() {
    if (this.code <= 0 || this.code === undefined) return;
    if (this.reservoir <= 0 || this.code === undefined) return;

    this.dataService.get(this.code).pipe(
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
        } else {
          // on modifie
          this.dataService.update(this.code, value.litre).subscribe();
        }
      })
    ).subscribe();
  }
}
