import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portland-links',
  templateUrl: './portland-links.component.html',
  styleUrls: ['./portland-links.component.scss']
})
export class PortlandLinksComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToRsvp(){
    this.router.navigate(['']);
  }

  goToRegistry(){
    this.router.navigate(['registry']);
  }

}
