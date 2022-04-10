import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // ตัวแปร Array
  footDeta: any = [];

  constructor(private service:OrderDetailService) { }

  ngOnInit(): void {
this.footDeta = this.service.foodDetails;
  }

}
