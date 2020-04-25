import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<!--    <div class="container">-->
<!--      <div class="content has-text-centered">-->
        <p>
          Made here
        </p>
<!--      </div>-->
<!--    </div>-->
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
