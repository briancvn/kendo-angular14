import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";

import { AppComponent } from "./app.component";
import { GridDirective } from "./grid/grid-directive";

@NgModule({
    declarations: [
        AppComponent,

        // Grid
        GridDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        GridModule,
        ButtonsModule,
        InputsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
