import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RightSideComponent } from './right-side/right-side.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'categoryDetails/:categoryId',
    component: CategoryDetailsComponent,
  },
  { path: 'pop', component: RightSideComponent },
  { path: 'results/:search', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
