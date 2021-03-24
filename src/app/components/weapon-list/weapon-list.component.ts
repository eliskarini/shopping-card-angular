import { Component, OnInit } from '@angular/core';
import { WeaponService } from 'src/app/services/weapon.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  constructor(
    public weaponService: WeaponService,
    public toastr: ToastrService
    ) { }
    
  weaponData = this.weaponService.weaponData;

  ngOnInit() {
  }

  proceedPurchase(): void {
    if (this.weaponService.getCartTotalPrice() == 0) {
      this.toastr.info('Please buy something!');
    } else if (this.weaponService.getCartTotalPrice() > 1000) {
      this.toastr.error('You don\'t have enough gold!');
    }else {
      this.toastr.success('Transaction Success!');
    }
  }

  getButtonA(): void {
    this.toastr.info('Welcome!');
  }

  getButtonB(): void {
    this.toastr.error('Bye');
  }

  getButtonC(): void {
    this.toastr.success('Hello');
  }
}
