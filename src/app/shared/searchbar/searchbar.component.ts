import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input()
  query: string;

  @Output()
  newSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(query: string){
    this.newSearch.emit(query);
  }


}
