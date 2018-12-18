import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientdata',
  templateUrl: './clientdata.component.html',
  styleUrls: ['./clientdata.component.css']
})
export class ClientdataComponent implements OnInit {
  Name:string="Ahmed"
  Surname:string="Helmy";
  RoomNo:string="A20";
  total:number=0.00;
  constructor() { }

  ngOnInit() {
  }

}
