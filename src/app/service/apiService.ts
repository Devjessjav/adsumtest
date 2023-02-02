import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    apiUrl = 'http://localhost:4000/api/comments/comments';

    constructor(private http: HttpClient) { }

    addComment(form) {
        console.log('enviado', this.apiUrl)
        console.log('enviado From', form)
        return this.http.post(this.apiUrl, form);
    }
}