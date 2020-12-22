import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven-forms",
  templateUrl: "./template-driven-forms.component.html",
  styleUrls: ["./template-driven-forms.component.css"]
})
export class TemplateDrivenFormsComponent implements OnInit {
  contactMethods = [{ id: 1, name: "Email" }, { id: 2, name: "Phone" }];

  constructor() {}

  ngOnInit() {}

  log(val) {
    console.log(val.value);
  }

  submit(f) {
    console.log(f.value);
  }
}
