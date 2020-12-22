import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSapce
      ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl("", Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  get username() {
    return this.form.get("username");
  }

  get password() {
    return this.form.get("password");
  }
}
