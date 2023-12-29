import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  {
  @Input() image: string = "";
  @Input() description: string="";
  @Input() nombre: string= "";

  constructor() { }

  ngOnInit() {}
}
