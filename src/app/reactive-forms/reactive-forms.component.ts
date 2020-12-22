import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder
} from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
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
    })
  });

  topicsForm = new FormGroup({
    topics: new FormArray([])
  });

  constructor(fb: FormBuilder) {
    //below code we can use if we will use form builder
    // this.form = fb.group({
    //   username: ["", Validators.required],
    //   password: ["", Validators.required]
    // });
  }

  ngOnInit() {}

  get username() {
    return this.form.get("account.username");
  }

  get password() {
    return this.form.get("account.password");
  }

  login() {
    // checking errors at form level
    this.form.setErrors({ invalidLogin: true });
  }

  addTopic(topic: HTMLInputElement) {
    this.topicsArray.push(new FormControl(topic.value));
    topic.value = "";
  }

  get topicsArray() {
    return (this.topicsForm.get("topics") as FormArray).controls;
  }
}
