import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./components/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./components/history/history.module').then(
        (m) => m.HistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
