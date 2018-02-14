import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  template: `
    <p>
      new-comp works!
    </p>
  `,
  styles: []
})
export class NewCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
