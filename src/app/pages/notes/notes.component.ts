import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { UserService } from '../user/services/user.service';
import { Note } from './interface';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes$: Note[] = [];

  constructor(private notesSvc: NotesService, private router: Router) {}

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.getNotes();
      console.log("se a solicitado la lista de notas");
    } else {
      console.log("no se hace la petición de notas por falta de un token de usuario");
    }
  }
  isLoggedIn() {
    return this.notesSvc.isLoggedIn();
  }
  getNotes() {
    this.notesSvc.getNotes().subscribe((note) => (this.notes$ = note));
  }
  editNote(id: string) {
    this.router.navigate(['/note', id]);
  }
  deleteNote(id: string) {
    this.notesSvc.deleteNote(id).subscribe((res) => {
      console.log(res);
      console.log('Nota eliminada');
      this.getNotes();
      console.log(this.notes$);
    });
  }
}
