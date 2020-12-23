import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'speakers', component: SpeakersComponent },
	{ path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
