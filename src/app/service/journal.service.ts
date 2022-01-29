import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JournalEntry } from '../model/journalentry.model';
import { of } from 'rxjs';
import JournalEntries from '../../assets/JournalEntries.json';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  // private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getJournalEntries(): Observable<JournalEntry[]> {
    // return this.http.get<JournalEntry[]>(this.url);

    return of(JournalEntries);
  }

}


