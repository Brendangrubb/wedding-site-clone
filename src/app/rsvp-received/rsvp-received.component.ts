import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp-received',
  templateUrl: './rsvp-received.component.html',
  styleUrls: ['./rsvp-received.component.scss']
})
export class RsvpReceivedComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPortland(){
    this.router.navigate(['portland-links']);
  }

  goToRegistry(){
    this.router.navigate(['registry']);
  }

}
