import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-princing',
  templateUrl: './princing.component.html',
  styleUrls: ['./princing.component.css']
})
export class PrincingComponent implements OnInit {
   users= {};
   count=0;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(d => {
    this.users['arr']=d;
    //alert(this.users.arr.length);
    this.count=this.users['arr'].length;
  })
}

}
