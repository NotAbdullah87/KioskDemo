import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomePageComponent,
    //   title: 'Home page'
    },
    {
        path: 'Dashboard',
        component: UserDashboardComponent,
        title: 'Home page'
    }
  
  ];
  
  export default routeConfig;