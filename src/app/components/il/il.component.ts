import { Component, OnInit } from '@angular/core';
import { Il } from 'src/app/models/il';
import { IlService } from 'src/app/services/il.service';

@Component({
  selector: 'app-il',
  templateUrl: './il.component.html',
  styleUrls: ['./il.component.css']
})
export class IlComponent implements OnInit {
  ils:Il[]=[];
  currentIl:Il;

  constructor(private ilService: IlService) {}

  ngOnInit():void {
    this.getIls();
  }
  getIls() {
    this.ilService
      .getIls()
      .subscribe(response => {this.ils = response.data
      })   
  }
  setCurrentIl(il:Il){
    this.currentIl=il;
  }
  getCurrentIlClass(il:Il){
    if(il==this.currentIl){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
  getAllIlClass(){
    if(!this.currentIl){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
