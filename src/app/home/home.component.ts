import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Response {
    db: string;
    name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public response: Response[];
  public radioValue: Response;

  constructor(
    private router: Router
  ) {
    this.radioValue = null;
    this.response =
    [
      {
        db: "yes",
        name: "Happily Accept"
      },
      {
        db: "no",
        name: "Regretfully Decline"
      }
    ];
   }

  ngOnInit() {
  }

  sendRsvp(adults,children){

    console.log(adults);
    console.log(children);
    console.log(this.radioValue.db)
    // this.router.navigate(['rsvp-received']);
  }

  goToPortland(){
    this.router.navigate(['portland-links']);
  }

  goToRegistry(){
    this.router.navigate(['registry']);
  }

}
