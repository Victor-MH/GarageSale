import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Containers
import { AppComponent } from "./app.component";
import { GuideComponent } from "./containers/guide/guide.component";
import { LoginComponent } from "./containers/login/login.component";

//Routes
const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component:LoginComponent},
    {path: 'guide', component:GuideComponent}
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);