import { Component, OnInit,inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//firebase
import * as firebase from 'firebase/app';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import {writeUserData ,consulta} from './firebase.config';
// Your web app's Firebase configuration
//-----------
//var mostrar= DBfire; 
//var mostrar= getCitiesResult;
//var mostrar= x;
//-----------
/*
try {
  writeUserData("faca", "faca grande", "15","5");
} catch (error) {
  console.error("Erro ao chamar writeUserData:", error);
}
 */
//var nomeDoProduto:any='camisa';
//console.log(consulta('camisa'));
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})





export class AppComponent implements OnInit {
  mostrarDois: any;
  myForm: FormGroup;
  nomeDoProduto: string="";
  busqueIsso:string="";
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: [''],
      desc: [''],
      price: [''],
      quantidade: ['']
    });
  }
  /*
  atualizarNomeProduto(valor: any) {
    this.nomeDoProduto = valor;
    console.log('Nome do produto:', this.nomeDoProduto);
  }
  
  atualizarDados(event: any) {
    const value = event.target.value;
    console.log('Nome do produto:', value);
    this.nomeDoProduto = value;
  }
  */
  ngOnInit() {
   // this.consultarDados(this.nomeDoProduto);
  }

  async consultarDados(nome: string) {
    this.mostrarDois = await consulta(nome);
    console.log('Dados:', this.mostrarDois);
  }

  enviarFormulario() {
    const formValues = this.myForm.value;
    const nomePorduto = formValues.name;
    const descricaoProduto = formValues.desc;
    const precoPorduto = formValues.price;
    const quantidadeProduto = formValues.quantidade;

    try {
      writeUserData(nomePorduto, descricaoProduto, precoPorduto, quantidadeProduto);
      this.myForm.reset();
    } catch (error) {
      console.error("Erro ao chamar writeUserData:", error);
    }
  }
  //----
  buscar() {
    
    this.busqueIsso=this.myForm.value.name; 
    this.consultarDados(this.busqueIsso);
    console.log("buscar ligado"+this.myForm.value.name);
  }
  //----
}
