import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { NoteComponent } from './pages/note/note.component';
import { NotesComponent } from './pages/notes/notes.component';
import { LoginComponent } from './pages/user/login/login.component';
import { LogupComponent } from './pages/user/logup/logup.component';

const routes: Routes = [
  {path: '', component: NotesComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'logup', component: LogupComponent,},
  {path: 'create-note', component: NoteComponent,},
  {path: 'note/:id', component: NoteComponent,},
  {path: '**', component: Error404Component,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
