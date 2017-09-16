import { Injectable } from '@angular/core';
import { Response } from './response.model';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFire } from 'angularfire';

@Injectable()
export class ResponseService {
  responses: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.responses = db.list('guests');
  }

  addResponse(newResponse: Response){
    console.log(this.responses);
    this.responses.push(newResponse);
  }

}
