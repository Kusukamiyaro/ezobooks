import { Component, Input } from '@angular/core';
import { item } from '../interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
@Input() item:item | any ;

}
