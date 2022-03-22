import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "src/Components/Home/home.component";
import { LoginComponent } from "src/Components/Login/login.component";
import { RegisterComponent } from "src/Components/Register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthService } from "src/Services/auth.service";
import { AuthGuard, HomeGuard } from "src/Guards/auth.guard";
import { AboutComponent } from "src/Components/About/about.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, AuthGuard, HomeGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
