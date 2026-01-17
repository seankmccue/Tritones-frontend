import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactUrl = 'http://127.0.0.1:8000/contactData/'; // Replace with your Django API endpoint

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any): Observable<any> {
    return this.http.post<any>(this.contactUrl, formData);
  }
}