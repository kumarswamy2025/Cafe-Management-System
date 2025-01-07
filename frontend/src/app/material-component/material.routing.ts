import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouterGuadeService } from '../services/routerGuard/router-guade.service';
import { ManageProductComponent } from './manage-product/manage-product.component';



export const MaterialRoutes: Routes = [
    {
        path:'category',
        component:ManageCategoryComponent,
        canActivate:[RouterGuadeService],
        data:{
            expectedRole:['admin']

        }

    },
    {
        path:'product',
        component:ManageProductComponent,
        canActivate:[RouterGuadeService],
        data:{
            expectedRole:['admin']

        }

    },
];
