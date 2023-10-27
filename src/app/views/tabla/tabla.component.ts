import { Component } from '@angular/core';
import { DATA } from '../../data/customers';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {

  public data: any;
  constructor() {}

  public ngOnInit() {
      this.data = DATA;
  }
}
