import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status: String = "Work in progress :)";

  constructor() {
  }

  ngOnInit(): void {
  }
}
