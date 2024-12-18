import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { AccueilComponent } from './accueil/accueil.component';
const routes: Routes = [
  {path:'connexion',component:ConnexionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'panier',component:PanierComponent},
  {path:'accueil',component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
