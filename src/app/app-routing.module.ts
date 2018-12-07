import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { TestComponent } from "./test/test.component";
import { LoggedInGuard } from "./guard/logged-in-guard.service";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "test", component: TestComponent, canActivate: [LoggedInGuard] },
    { path: "accueil", component: HomeComponent },
    { path: "myaccount", component: MyAccountComponent },
    { path: '', component: HomeComponent },
    { path: 'not-found', component: ErrorComponent },
    { path: '**', redirectTo: 'not-found' }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };