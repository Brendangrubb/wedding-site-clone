import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from './../response.model';
import { ResponseService} from './../response.service';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ResponseService]
})

export class AdminComponent implements OnInit {
  responses: FirebaseListObservable<any[]>;
  currentResponse;
  // currentName;

  constructor(
    private router: Router,
    private responseService: ResponseService,
  ) { }

  ngOnInit() {
    this.responses = this.responseService.getResponses();
  }

  goToHome(){
    this.router.navigate(['']);
  }

}
