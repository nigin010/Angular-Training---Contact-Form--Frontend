import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:4000/api/';
  
  constructor(private http : HttpClient) {

  }

  submitContact(name : string, email : string, mobile : string, message : string) : Observable<any>{
    const body = {name, email, mobile, message};
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.baseUrl + 'contact/', body, {headers});
  }

  updateContact(id: string, name: string, email: string, mobile: string, message: string): Observable<any> {
    const body = { name, email, mobile, message };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.baseUrl + 'contacts/' + id, body, {
      headers,
    });
  }

  deleteContact(id : string) : Observable<any> {
    return this.http.delete(this.baseUrl+'contacts/'+id);
  }

}
