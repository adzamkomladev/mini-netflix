import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMovieService {
  constructor(private afs: AngularFirestore) {}

  updateFavourites(user: User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
      `users/${user.uid}`
    );

    const data: User = { ...user };

    return userRef.set(data, { merge: true });
  }
}
