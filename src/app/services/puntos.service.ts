import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// https://medium.com/madhash/how-to-crud-in-angular-firebase-firestore-456353d7c62
export interface Punto {
  nombre: string;
  alias: string;
  puntos: number;
  correo: string;
  liga: number;
  plataforma: string;
  id: string;
  gameId: string;
  partidas: number;
  kills: number;
  ls1: number;
  lsq1: number;
  l2: number;
  l3: number;
}

@Injectable({
  providedIn: 'root',
})
export class PuntosService {
  constructor(private firestore: AngularFirestore) {}

  getPuntos(division: number) {
    return this.firestore
      .collection('puntos', (ref) =>
        ref.where('liga', '==', division).orderBy('puntos', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((values) =>
          values.map((a) => {
            // console.log(a);
            const data = a.payload.doc.data() as Punto;
            data.id = a.payload.doc.id;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  getPuntosUnificados() {
    return this.firestore
      .collection('puntos', (ref) => ref.orderBy('puntos', 'desc'))
      .snapshotChanges()
      .pipe(
        map((values) =>
          values.map((a) => {
            // console.log(a);
            const data = a.payload.doc.data() as Punto;
            data.id = a.payload.doc.id;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  updatePuntos(data) {
    return this.firestore
      .collection('puntos')
      .doc(data.id)
      .set(
        {
          plataforma: data.plataforma,
          gameId: data.gameId,
          partidas: data.partidas,
          kills: data.kills,
          ls1: data.ls1,
          lsq1: data.lsq1,
          l2: data.l2,
          l3: data.l3,
          puntos: data.puntos,
        },
        { merge: true }
      )
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  createPuntos(data): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('puntos')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
