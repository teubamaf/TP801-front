import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent {

  constructor(private dataservice : DataService) { }

  prixEssence!: number;
  carburant!: string;

  response: { litre: number, carburant: string, id: number } | null = null;


  onSubmitForm(){
    if (this.prixEssence <= 0 || this.prixEssence === undefined) return;
    if (this.carburant === undefined || this.carburant.length == 0) return;

    this.dataservice.create((this.prixEssence)*1.5, this.carburant).pipe(
      tap(value =>{
        this.response = value;
      } )
    ).subscribe();
  }

}
