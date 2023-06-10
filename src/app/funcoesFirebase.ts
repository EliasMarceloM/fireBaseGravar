
import { initializeApp } from "firebase/app";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import {  Firestore } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {

  apiKey: "AIzaSyBXu43VKBO2thdrY9Tll6vyvKWGwqfwzfY",
  authDomain: "aula14-36315.firebaseapp.com",
  databaseURL: "https://aula14-36315-default-rtdb.firebaseio.com",
  projectId: "aula14-36315",
  storageBucket: "aula14-36315.appspot.com",
  messagingSenderId: "347159781701",
  appId: "1:347159781701:web:43acc329e9b3bacd721e2c"

};
initializeApp(firebaseConfig);

const database = getDatabase();
//gravar dados 
export const gravaNoFire = (nome: any, descricao: any, valor: any,quantidade:any) => {
  const db = getDatabase();
  set(ref(db, 'users/' + nome), {
    nomeP: nome,
    descricaoP: descricao,
    valorP: valor,
    quantidadeP:quantidade
  });
}
//end gravar dados 
//-------receber dados 
import {child, get } from "firebase/database";


export const consultaNoFire = async (nome: string) => {
  const db = getDatabase();
  const snapshot = await get(child(ref(db), 'users/' + nome));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};


//-------end receber dados