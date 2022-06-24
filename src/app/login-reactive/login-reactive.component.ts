import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";

@Component({
  selector: "login",
  templateUrl: "./login-reactive.component.html",
  styleUrls: ["./login-reactive.component.css"],
})
export class LoginReactiveComponent implements OnInit {
  form = this.fb.group({
    email: [
      "",
      {
        validators: [Validators.required],
        updateOn: "blur",
      },
    ],
    password: ["", [Validators.required, createPasswordStrengthValidator()]],
  });

  // form = new FormGroup({
  //   email: new FormControl("", {
  //     validators: [Validators.required],
  //     // updateOn: "blur", // only will update the value when you go away from field
  //   }),
  //   password: new FormControl("", {
  //     validators: [
  //       Validators.required,
  //       // Validators.minLength(8),
  //       createPasswordStrengthValidator(),
  //     ],
  //   }),
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get email() {
    return this.form.controls["email"];
  }

  get password() {
    return this.form.controls["password"];
  }
}
