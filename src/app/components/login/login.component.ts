import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.createLoginForm();
    
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      password : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  login() {
    this.isFormSubmitted=true;
    // Return if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      
      console.log(this.loginForm.value);
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toastrService.info(response.message);
          localStorage.setItem("token", response.data.token);
          if (localStorage.getItem("token") != null) {
            this.router.navigateByUrl("home");
          }
        },
        (responseError) => {
          //console.log(responseError)
          this.toastrService.error(responseError.error);
        }
      );
    }
  }
}
