import { Routes } from '@angular/router';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ImageDetailsComponent } from './results-list/image-detail/image-details.component';
export const appRoutes: Routes = [
  { path: 'images', component:  SearchFieldComponent},
  { path: 'images/:id', component: ImageDetailsComponent},
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  {path:'**', redirectTo: '/images', pathMatch:'full'},
];