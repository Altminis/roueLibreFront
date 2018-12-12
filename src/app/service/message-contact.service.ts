import { Injectable } from '@angular/core';
import { MessageContact } from '../model/MessageContact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageContactService {

  constructor(private http : HttpClient) { }

  sendMessage(message : MessageContact) : Observable<any> {
    return this.http.post(environment.backURL + '/messages', message);
  }
}
