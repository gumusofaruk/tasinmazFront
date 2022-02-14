import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasinmaz',
  templateUrl: './tasinmaz.component.html',
  styleUrls: ['./tasinmaz.component.css']
})
export class TasinmazComponent implements OnInit {

  tasinmaz1 = { tasinmazId: 6, tasinmazName: "Şirket", ilId: 3, ilceId: 2 }
  tasinmaz2 = { tasinmazId: 7, tasinmazName: "Şirket1", ilId: 3, ilceId: 2 }
  tasinmaz3 = { tasinmazId: 8, tasinmazName: "Şirket2", ilId: 3, ilceId: 2 }
  tasinmaz4 = { tasinmazId: 9, tasinmazName: "Şirket3", ilId: 3, ilceId: 2 }
  tasinmazs = [this.tasinmaz1, this.tasinmaz2, this.tasinmaz3, this.tasinmaz4]

  constructor() { }

  ngOnInit() {
  }

}
