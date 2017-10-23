import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = `@NgModule({
  declarations: [
  ],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    AtModule.forRoot(),
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}`

}
