import { Component } from '@angular/core';
import { gql,Apollo } from 'apollo-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RogersTest2';

  constructor(private apollo:Apollo) { }

}
