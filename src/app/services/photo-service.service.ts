import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    private handleError: HandleError;
    private urlPhoto = "https://jsonplaceholder.typicode.com/photos?albumId=";
    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('PhotoService');
    }

    getListPhoto(albumId: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(this.urlPhoto + albumId).pipe(
            catchError(this.handleError('getListPhoto', []))
        );
    }

    getListPhotoLimit(albumId: number, start: number, end: number): Observable<Photo[]>{
        let paramStart = "&_start=" + start;
        let paramEnd = "&_end=" + end;
        console.log(albumId, start, end);
        return this.http.get<Photo[]>(this.urlPhoto + albumId + paramStart + paramEnd).pipe(
            catchError(this.handleError('getListPhotoLimit', []))
        );
    }

}
