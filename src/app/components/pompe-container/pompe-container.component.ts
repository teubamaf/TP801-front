import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pompe-container',
  templateUrl: './pompe-container.component.html',
  styleUrls: ['./pompe-container.component.scss']
})
export class PompeContainerComponent implements OnInit {

  carburant!: 'diesel' | 'essence';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(value => this.carburant = value['carburant'])
    ).subscribe();
  }

}
