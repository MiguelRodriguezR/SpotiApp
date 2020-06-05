import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ArtistComponent} from "./components/artist/artist.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
