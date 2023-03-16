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


  onSubmitForm(){
    this.dataservice.create((this.prixEssence)*2).pipe(
      tap(value =>{
        console.log(value);
        this.code = value.id;
      } )
    ).subscribe();
  }

}
