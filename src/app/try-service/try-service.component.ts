import { Component, OnInit } from '@angular/core';


import { MenudbService } from '../menudb.service';
// import {Router} from '@angular/router'

@Component({
  selector: 'app-try-service',
  templateUrl: './try-service.component.html',
  styleUrls: ['./try-service.component.css']
})
export class TryServiceComponent implements OnInit {

 public menu=[]
  constructor(private menuser:MenudbService) { }

  ngOnInit() {
  this.menuser.getAll().subscribe(data=>this.menu=data)
    
  }

}
