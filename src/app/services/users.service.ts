import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private auth: Auth) { }

  // Creamos varios metodos uno para registro
  register({ email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Un método para iniciar sesión
  login({ email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  // Un método para iniciar sesión mediante Google
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // Y Un método para deslogearse/cerrar sesión
  logout(){
    return signOut(this.auth);
  }
}
