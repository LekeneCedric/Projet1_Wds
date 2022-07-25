import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();
  
  onserarch(){
    this.search.emit(this.searchText);
  }

}
