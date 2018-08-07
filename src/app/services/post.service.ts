import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) { }
    url = "https://jsonplaceholder.typicode.com/posts";
    private log(message: string) {
        this.messageService.add(`PostService: ${message}`);
    }
    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.url);
    }

    getPostsByUserId(userId: number): Observable<Post[]> {
        return this.http.get<Post[]>(this.url + "?userId=" + userId);
    }

    updatePost(post: Post) {
        console.log(this.url + "/" + post.userId);
        return this.http.put(this.url + "/" + post.userId, post).pipe(
            tap(_ => this.log(`update post id=${post.id}`)),
            catchError(this.handleError<any>('update post'))
        );
    }

    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
