import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppComponent } from './app.component';


//=======route definition================
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '', component: LoginComponent },
  // { path: '**', component: NotFoundComponent }
  // { path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
