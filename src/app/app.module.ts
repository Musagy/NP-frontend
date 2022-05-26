import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { Error404Component } from './pages/error404/error404.component';
import { NotesComponent } from './pages/notes/notes.component';
import { LoginComponent } from './pages/user/login/login.component';
import { LogupComponent } from './pages/user/logup/logup.component';
import { NoteComponent } from './pages/note/note.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error404Component,
    NotesComponent,
    LoginComponent,
    LogupComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
