import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouterGuadeService } from '../services/routerGuard/router-guade.service';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { ManageUserComponent } from './manage-user/manage-user.component';



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
    {
        path:'order',
        component:ManageOrderComponent,
        canActivate:[RouterGuadeService],
        data:{
            expectedRole:['admin','user']

        }

    },
    {
        path:'bill',
        component:ViewBillComponent,
        canActivate:[RouterGuadeService],
        data:{
            expectedRole:['admin','user']

        }

    },
    {
        path:'user',
        component:ManageUserComponent,
        canActivate:[RouterGuadeService],
        data:{
            expectedRole:['admin','user']

        }

    },
];
