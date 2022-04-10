import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css'],
})
export class MenupageComponent implements OnInit {
  // สร้างตัวแปร
  // เก็บ Id
  getMenuId: any;
  // เก็บชุดข้อมูล Array
  menuData: any;

  constructor(
    private parameter: ActivatedRoute,
    private service: OrderDetailService
  ) {}

  ngOnInit(): void {
    // สร้างตัวแปรมารับค่า parameter (id) ที่ส่งมา
    // ดึงเอาเฉพาะค่าจาก id
    this.getMenuId = this.parameter.snapshot.paramMap.get('id');
      // console.log("Para",this.getMenuId);
    // เรียกใช้ function เมื่อโหลดเว็บเสร็จ
    this.getDataFormID();
  }

// function ดึงข้อูลจาก Array ตาม id
  getDataFormID(){
    // console.log("Para",this.getMenuId);

    //ถ้ามีข้อมูลใน getMenuId
    if(this.getMenuId){
// สร้างตัวแปรมารับค่า Array /filter = ค้นหา
// จากการค้นหาข้อมูลใน service ตาม id
this.menuData = this.service.foodDetails.filter((value)=>{
  return value.id == this.getMenuId;
});
    }
    // console.log(this.menuData);
    
    
  }

}
