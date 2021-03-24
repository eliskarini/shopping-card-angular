import { Component, OnInit, Input} from '@angular/core';
import { WeaponService } from 'src/app/services/weapon.service';

@Component({
  selector: 'weapon-item',
  templateUrl: './weapon-item.component.html',
  styleUrls: ['./weapon-item.component.css']
})
export class WeaponItemComponent implements OnInit {
@Input() item: object;

constructor(public weaponService:WeaponService) {}

ngOnInit() {
}

onSelectedItemHandler(item): any {
  item.addedToCart = !item.addedToCart;
}

}
