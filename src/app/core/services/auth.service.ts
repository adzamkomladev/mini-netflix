import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, share } from 'rxjs/operators';

import { auth } from 'firebase/app';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.currentUser = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }

        return of(null);
      })
    );
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.pipe(share());
  }

  private updateUser(user: firebase.User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  async googleSignIn(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();

    const response = await this.afAuth.auth.signInWithPopup(provider);

    return this.updateUser(response.user);
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
