import { Component, OnInit } from '@angular/core';
import { JournalEntry } from './model/journalentry.model';
import { JournalService } from './service/journal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'journal-example';

  journalEntries = new Array<JournalEntry>() ;

  constructor(private jservice: JournalService){}

  ngOnInit(): void {
    this.jservice.getJournalEntries().subscribe(
      (resp) => {
        this.journalEntries = resp.map((e) => {
          return new JournalEntry(
            e.body,
            e.id,
            e.title,
            e.userId
          );
        });
      });
  }
}
