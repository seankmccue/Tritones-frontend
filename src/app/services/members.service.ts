import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';


@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrlMembers = 'http://127.0.0.1:8000/memberData/';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrlMembers);
  }
}
