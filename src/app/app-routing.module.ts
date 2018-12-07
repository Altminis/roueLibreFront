import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MyAccountComponent } from "./my-account/my-account.component";

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "myaccount", component: MyAccountComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };