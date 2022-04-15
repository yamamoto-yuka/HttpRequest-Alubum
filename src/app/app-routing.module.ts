import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhototsComponent } from './photots/photots.component';

const routes: Routes = [{ path: 'photos', component: PhototsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
