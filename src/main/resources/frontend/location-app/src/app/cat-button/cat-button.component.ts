import {CatsService} from "../cats.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-button',
  template:`
    <p>{{getTitle()}}</p>
    <ul>
      <li *ngFor="let cat of cats">
        {{cat}}
      </li>
    </ul>
  `,
  styleUrls: ['./cat-button.component.css']
})
export class CatButtonComponent implements OnInit {
  title = "Cat Button";
  cats;

  constructor(service: CatsService) {
    this.cats = service.getCats();
  }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }
}
