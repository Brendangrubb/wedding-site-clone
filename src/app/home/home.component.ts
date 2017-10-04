import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from './../response.model';
import { ResponseService} from './../response.service';


interface RadioResponse {
    respForDb: string;
    name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ResponseService]
})

export class HomeComponent implements OnInit {
  responses: Response[];

  public radioResponse: RadioResponse[];
  public radioValue: RadioResponse;

  constructor(
    private router: Router,
    private responseService: ResponseService,
  ) {
    this.radioValue = null;
    this.radioResponse =
    [
      {
        respForDb: "yes",
        name: "Happily Accept"
      },
      {
        respForDb: "no",
        name: "Regretfully Decline"
      }
    ];
   }

  ngOnInit() {
  }

  sendRsvp(guestName,adults,children,message){
    var newResponse = new Response(guestName,this.radioValue.respForDb,adults,children,message);
    if (guestName === "") {
      alert("Please enter your name");
    } else {
    this.responseService.addResponse(newResponse);
    this.router.navigate(['rsvp-received']);
    }
  }

  goToPortland(){
    this.router.navigate(['portland-links']);
  }

  goToRegistry(){
    this.router.navigate(['registry']);
  }

  goToAdmin(){
    this.router.navigate(['admin']);
  }

}
