import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private handleError: HandleError;
    urlAlbum = "https://jsonplaceholder.typicode.com/albums";
    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('AlbumService');
    }

    getListAlbumByUserId(userId: number): Observable<Album[]> {
        return this.http.get<Album[]>(this.urlAlbum + "?userId=" + userId)
            .pipe(
                catchError(this.handleError('getListAlbum', []))
            );
    }

    getAlbum(id): Observable<Album> {
        return this.http.get<Album>(this.urlAlbum + '/' + id);
    }
}
