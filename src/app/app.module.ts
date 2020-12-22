import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TemplateDrivenFormsComponent } from "./template-driven-forms/template-driven-forms.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
