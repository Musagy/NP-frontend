import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes/services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css', '../user/login/login.component.css'],
})
export class NoteComponent implements OnInit {
  newNote = {
    title: '',
    content: '',
  };

  constructor(private notesSvc: NotesService, private router: Router) {}

  ngOnInit(): void {
    if (this.router.url.includes('/note')) {
      this.notesSvc.getNote(this.router.url.split('/')[2]).subscribe((note) => {
        const { title, content } = note;
        this.newNote = { title, content };
      });
    }
  }
  goingToCreate(){
    return this.router.url.includes('/note');
  }
  createNewNote() {
    const { title, content } = this.newNote;
    if (!title || !content)
      return console.error('Titulo y contenido son requeridos');
    this.notesSvc
      .createNote({
        title,
        content,
      })
      .subscribe(
        (res) => {
          console.log(res);
          console.log('Nota creada');
          this.router.navigate(['/']);
        },
        (err) => {
          console.error(err);
        }
      );
  }

  updateNote() {
    const { title, content } = this.newNote;
    if (!title || !content)
      return console.error('Titulo y contenido son requeridos');
    this.notesSvc
      .updateNote(this.newNote, this.router.url.split('/')[2])
      .subscribe(
        (res) => {
          console.log(res);
          console.log('Nota actualizada');
          this.router.navigate(['/']);
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
