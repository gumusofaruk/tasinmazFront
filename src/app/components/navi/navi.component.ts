import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
