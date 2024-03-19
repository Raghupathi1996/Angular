import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  author = ['Author1', 'Author2', 'Author3'];
  getAuthors() {
    return this.author;
  }
}
