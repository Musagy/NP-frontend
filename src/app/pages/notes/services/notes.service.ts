import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, NewNote } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private API_URL = 'https://musagy-notas-personales.herokuapp.com/posts/';
  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API_URL, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
  }
  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(this.API_URL + id, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      }
    })
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  createNote(note: NewNote): Observable<any> {
    return this.http.post(this.API_URL, note, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
  }
  updateNote(note: NewNote, id:string): Observable<any> {
    return this.http.put(this.API_URL + id, note, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
  }
  deleteNote(id: string) {
    return this.http.delete(this.API_URL + id, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
  }
}
