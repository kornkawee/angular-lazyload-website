import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // ตัวแปร Array
  footDeta: any = [];

  constructor(private service: OrderDetailService) { }

  ngOnInit(): void {
   this.footDeta = this.service.foodDetails
  }

}
