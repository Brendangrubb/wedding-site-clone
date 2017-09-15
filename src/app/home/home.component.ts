import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sendRsvp(accept,decline,adults,children){
    console.log(accept);
    console.log(decline);
    console.log(adults);
    console.log(children);
    this.router.navigate(['rsvp-received']);
  }

  goToPortland(){
    this.router.navigate(['portland-links']);
  }

  goToRegistry(){
    this.router.navigate(['registry']);
  }

}
