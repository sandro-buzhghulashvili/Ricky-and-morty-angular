import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor() { 

  }
  ngOnInit(): void {
    
  }

  activated:boolean = false
}
