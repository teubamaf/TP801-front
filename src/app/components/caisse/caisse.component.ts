import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent {

  constructor(private dataservice : DataService){}

  prixEssence!: number;
  code!: number;
  carburant!: string;


  onSubmitForm(){
    if (this.prixEssence <= 0 || this.prixEssence === undefined) return;
    if (this.carburant === undefined || this.carburant.length == 0) return;

    this.dataservice.create((this.prixEssence)*1.5, this.carburant).pipe(
      tap(value =>{
        this.code = value.id;
      } )
    ).subscribe();
  }

}
