import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/Services/auth.service";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent {
  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {}
  a = "form-group";
  b = "form-control";
  data: any;
  login(val: any) {
    const url = "http://localhost:3000/user/login";
    this.http.post(url, val).subscribe(
      (res) => {
        this.data = res;
        localStorage.setItem("token", this.data.token);
        this.auth.isLoggedIn();
        this.router.navigate([""]);
      },
      (err) => {
        if (err) alert(err.error);
      }
    );
  }
}
