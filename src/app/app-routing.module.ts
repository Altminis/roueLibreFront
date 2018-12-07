import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TestComponent } from "./test/test.component";
import { LoggedInGuard } from "./guard/logged-in-guard.service";

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "test", component: TestComponent, canActivate: [LoggedInGuard]}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };