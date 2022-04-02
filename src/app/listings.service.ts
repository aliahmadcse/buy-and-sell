import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Listing } from "./types";
import { AngularFireAuth } from "@angular/fire/compat/auth";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const httpOptionsWithAuthToken = (token: string) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token
  })
});

@Injectable({
  providedIn: "root",
})
export class ListingsService {
  constructor(private http: HttpClient, private angularFireAuth: AngularFireAuth) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}/add-view`,
      {},
      httpOptions);
  }

  getListingsForUser(): Observable<Listing[]> {
    return new Observable<Listing[]>((observer) => {
      this.angularFireAuth.user.subscribe(user => {
        user && user.getIdToken().
          then(token => {
            if (user && token) {
              this.http.get<Listing[]>(`/api/users/${user.uid}/listings`, httpOptionsWithAuthToken(token)).
                subscribe(listings => {
                  observer.next(listings);
                });
            } else {
              observer.next([]);
            }
          });
      });
    });
  }

  deleteListing(id: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.angularFireAuth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.delete(`/api/listings/${id}`, httpOptionsWithAuthToken(token))
              .subscribe(() => observer.next());
          } else {
            observer.next(undefined);
          }
        });
      });
    });
  }

  createNewListing(listing: Listing): Observable<Listing> {
    return new Observable<Listing>((observer) => {
      this.angularFireAuth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.post<Listing>('/api/listings', listing, httpOptionsWithAuthToken(token))
              .subscribe(listing => observer.next(listing));
          } else {
            observer.next(undefined);
          }
        });
      });
    });
  };

  editListing(listing: Listing): Observable<Listing> {
    return new Observable<Listing>(observer => {
      this.angularFireAuth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.post<Listing>(`/api/listings/${listing.id}`, listing, httpOptionsWithAuthToken(token))
              .subscribe(listing => {
                observer.next(listing);
              });
          } else {
            observer.next(undefined);
          }
        });
      });
    });
  }
}
