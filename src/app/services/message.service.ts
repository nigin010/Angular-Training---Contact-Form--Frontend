import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Message {
  _id : string;
  name : string;
  email : string;
  mobile : string;
  message : string;
}

const baseUrl = 'http://localhost:4000/api/contacts';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) {
  
  }

  getMessages() : Observable<Message[]> {
    return this.http.get<Message[]>(baseUrl);
  }
}
