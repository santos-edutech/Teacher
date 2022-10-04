import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdminListComponent } from "./dashboard/admin-list/admin-list.component";
import { CreateAdminComponent } from "./dashboard/create-admin/create-admin.component";



export const routes: Routes = [
   {
    path:" ",
    component:AppComponent,
    children:[
        {path:'admin-list',component:AdminListComponent},
        {path:'create-admin',component:CreateAdminComponent},
    ]
   }
];