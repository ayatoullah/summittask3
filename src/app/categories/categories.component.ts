import { Component, OnInit } from '@angular/core';
import { MenudbService } from '../menudb.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public menu=[]
  constructor(private menuser:MenudbService) { }

  ngOnInit() {
  this.menuser.getAll().subscribe(data=>this.menu=data)
    
  }
}
