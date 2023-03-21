import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  onGoToCaisse() {
    this.router.navigateByUrl('/caisse');
  }

  onGoToPompeEssence() {
    this.router.navigateByUrl('/pompe/essence');
  }

  onGoToPompeDiesel() {
    this.router.navigateByUrl('/pompe/diesel');
  }
}
