import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test/test.component';
import { TrumpComponent } from './trump/trump.component';
import { TrumpishpeopleComponent } from './trumpishpeople/trumpishpeople.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    TrumpComponent,
    TrumpishpeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
