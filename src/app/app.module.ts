import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { ImplementationOneComponent } from './implementation-one/implementation-one.component';
import { ImplementationTwoComponent } from './implementation-two/implementation-two.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TimeFormComponent } from './implementation-two/time-form/time-form.component';

const appRoutes: Routes = [
  { path: 'implementation-one', component: ImplementationOneComponent },
  { path: 'implementation-two',      component: ImplementationTwoComponent },
  { path: '',
    redirectTo: '/implementation-one',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ImplementationOneComponent,
    ImplementationTwoComponent,
    TimeFormComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
