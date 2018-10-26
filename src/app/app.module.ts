import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CurrentProjectComponent } from "./current-project/current-project.component";
import { ShowSponsorComponent } from './show-sponsor/show-sponsor.component';
import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
  declarations: [AppComponent, CurrentProjectComponent, ShowSponsorComponent, DataGridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
