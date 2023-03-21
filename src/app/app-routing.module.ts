import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaisseComponent } from './components/caisse/caisse.component';
import { PompeContainerComponent } from './components/pompe-container/pompe-container.component';

const routes: Routes = [
  { path: 'caisse', component: CaisseComponent },
  { path: 'pompe/:carburant', component: PompeContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
