import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public palabra: String = '';
  constructor() { }

  ngOnInit(): void {
    
  }

  public search(text: string) {
    console.log(text);
    this.palabra = text;
  }

}
