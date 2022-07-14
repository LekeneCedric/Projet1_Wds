import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vigilance',
  templateUrl: './vigilance.component.html',
  styleUrls: ['./vigilance.component.scss']
})
export class VigilanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Welcome vigilance")
  }

}
