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
    private weaponService: WeaponService,
    private toastr: ToastrService
    ) { }
    
  weaponData = this.weaponService.weaponData;

  ngOnInit() {
  }

  proceedPurchase(): void {
    if (this.weaponService.getCartTotalPrice() == 0) {
      this.toastr.info('Please buy something');
    } else if (this.weaponService.getCartTotalPrice() > 1000) {
      this.toastr.error('You don\'t have enough gold!');
    }else {
      this.toastr.success('Transaction Success!');
    }
  }
}
